"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/seller-error.js");

const Warnings = {
  createSellerUnsuportedKeys : {
    code:"createSellerUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getSellerUnsuportedKeys: {
    code:"getSellerUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class SellerAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("seller");
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("updateSellerDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createSellerUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let sellerObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(sellerObject).length === 0){
      throw new Errors.Update.SellerNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new article object
    let newSeller = {
      ...sellerObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
      dtoOut = await this.dao.update(newSeller)
    }catch(e){
      throw e;
    }

    //HDS 5 - Return filled dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn) {

  }

  async delete(awid, dtoIn) {

  }

  async get(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("getSellerDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getSellerUnsuportedKeys.code,
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
    let validationResult = this.validator.validate("createSellerDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createSellerUnsuportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // HDS 2 - get author uuId and Name and add it to dtoIn
    //TODO: Zjednotit s dokumentaciou
    let uuIdentity = session.getIdentity().getUuIdentity();
    let firstName = session.getIdentity().getFirstName();
    let lastName = session.getIdentity().getLastName();
    dtoIn.UuId = uuIdentity;
    dtoIn.firstName = firstName;
    dtoIn.lastName = lastName;
    dtoIn.awid = awid;
    let dtoOut = {};

    // HDS 3 - Zapis do databazi
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

module.exports = new SellerAbl();
