"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/seller-error.js");
const { Permission } = require("uu_appg01_workspace");
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
    this.userdao = DaoFactory.getDao("user");
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

    //HDS 3 - Prepare new seller object
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

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("deleteSellerDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createSellerUnsuportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let sellerObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(sellerObject).length === 0){
      throw new Errors.Delete.SellerNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }


    //HDS 3 - Remove seller from DB
    let dtoOut = {}
    try {
      await this.dao.remove(awid, dtoIn.id)
    }catch (e){
      throw new Errors.Delete.DeleteSellerByDaoFailed({uuAppErrorMap}, {cause: e})
    }

    //HDS 4 return properly filled out dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listSellerDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getSellerUnsuportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    //HDS 2 Get itemList of sellers
    let dtoOut = await this.dao.list(awid)

    //HDS 3 - Return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
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

    // HDS 2 - get seller from DB
    let dtoOut = {}
    try{
      dtoOut = await this.dao.get(awid, dtoIn.id);
    }catch(e){
      throw e;
    }
    let user = await this.userdao.getByUserUuId(dtoOut.awid, dtoOut.uuId);
    dtoOut.firstName = user.firstName;
    dtoOut.lastName = user.lastName;
    dtoOut.email = user.email;
    dtoOut.telephoneNumber = user.telephoneNumber;
    dtoOut.rfidNumber = user.rfidNumber;
    dtoOut.awid = awid;
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
    let dtoOut = {};

    // HDS 3 - Database entry
    dtoIn.awid = awid;
    try {
      await Permission.create(awid, "Executives", [dtoIn.uuId] );
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
