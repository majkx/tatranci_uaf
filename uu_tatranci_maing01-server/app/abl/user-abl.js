"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/user-error.js");

const Warnings = {
  createUserUnsuportedKeys : {
    code:"createUserUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getUserUnsuportedKeys: {
    code:"getUserUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class UserAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("user");
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("updateUserDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createUserUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let userObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(userObject).length === 0){
      throw new Errors.Update.UserNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new article object
    let newUser = {
      ...userObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
      dtoOut = await this.dao.update(newUser)
    }catch(e){
      throw e;
    }

    //HDS 5 - Return filled dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("deleteUserDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createUserUnsuportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let userObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(userObject).length === 0){
      throw new Errors.Delete.UserNotFound({uuAppErrorMap}, {id: dtoIn.id})
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
      throw new Errors.Delete.DeleteUserByDaoFailed({uuAppErrorMap}, {cause: e})
    }

    //HDS 4 return properly filled out dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listArticleDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getArticleUnsuportedKeys.code,
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
    let validationResult = this.validator.validate("getUserDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getUserUnsuportedKeys.code,
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
    let validationResult = this.validator.validate("createUserDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createUserUnsuportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // HDS 2 - get author uuId and Name and add it to dtoIn
    ///TODO: Zjednotit s dokumentaciou nazvy props

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

module.exports = new UserAbl();
