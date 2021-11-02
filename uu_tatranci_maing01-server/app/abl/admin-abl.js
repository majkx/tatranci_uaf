"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/admin-error.js");

const Warnings = {
  createAdminUnsuportedKeys : {
    code:"createAdminUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getAdminUnsuportedKeys: {
    code:"getAdminUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class AdminAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("admin");
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("updateAdminDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createAdminUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let adminObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(adminObject).length === 0){
      throw new Errors.Update.AdminNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new article object
    let newAdmin = {
      ...adminObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
      dtoOut = await this.dao.update(newAdmin)
    }catch(e){
      throw e;
    }

    //HDS 5 - Return filled dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("deleteAdminDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createAdminUnsuportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let adminObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(adminObject).length === 0){
      throw new Errors.Delete.AdminNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    // HDS -- Keď objekt obsahuje cudzie kľúče (mažem editora ktorý má články)
    // Tak najskôr si getnem editora, potom vylistujem jeho články ktorým zmením autora podľa vstupu == na vstupe pribudne forceDelete:true/false a uuId nového autora
    // keď bude forceDelete false, a editor bude mať nejaké články, tak vyhodíme chybu
    // Pokiaľ bude forceDelete true, a editor bude mať nejaké články, zmeníme autora článku na id zo vstupu (dtoIn.newAuthorId)
    // a až následne mažem editora.
    // List podľa filtrov (podľa dtoIn)


    //HDS 3 - Remove article from DB
    let dtoOut = {}
    try {
      await this.dao.remove(awid, dtoIn.id)
    }catch (e){
      throw new Errors.Delete.DeleteAdminByDaoFailed({uuAppErrorMap}, {cause: e})
    }

    //HDS 4 return properly filled out dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listAdminDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getAdminUnsuportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    //HDS 2 Get itemList of articles
    let dtoOut = await this.dao.list(awid)

    //HDS 3 - Return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async get(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("getAdminDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getAdminUnsuportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    // HDS 2 - get article from DB
    let dtoOut = {}
    try{
      dtoOut = await this.dao.get(awid, dtoIn.id);
    }catch(e){
      throw e;
    }

    // HDS 3 - Return object from DB
    dtoOut.uuAppErrorMap = uuAppErrorMap
    return dtoOut;
  }

  async create(awid, dtoIn, session, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("createAdminDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createAdminUnsuportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // HDS 2 - get author uuId and Name and add it to dtoIn
    //TODO: Zjednotit s dokumentaciou
    // let uuIdentity = session.getIdentity().getUuIdentity();
    // let firstName = session.getIdentity().getFirstName(); // Tvoje meno, nie administratorove !
    // let lastName = session.getIdentity().getLastName();
    // dtoIn.UuId = uuIdentity;
    // dtoIn.firstName = firstName;
    // dtoIn.lastName = lastName;
    // dtoIn.awid = awid;

    let dtoOut = {};

    // HDS 3 - Zapis do databazi
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.create(dtoIn)
    } catch(e){
      throw e;
    }

    // HDS 4 - Return object
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

}

module.exports = new AdminAbl();
