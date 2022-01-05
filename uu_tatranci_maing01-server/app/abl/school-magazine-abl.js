"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/school-magazine-error.js");

const Warnings = {
  createSchoolMagazineUnsuportedKeys : {
    code:"createSchoolMagazineUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getSchoolMagazineUnsuportedKeys: {
    code:"getSchoolMagazineUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class SchoolMagazineAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("schoolMagazine");
    this.userDao = DaoFactory.getDao("user")
  }

  async listByUuId(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listSchoolMagazineByUuIdDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getSchoolMagazineUnsuportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    //HDS 2 - validation if author exists

    // HDS 3 -
    let dtoOut = {}
    try {
      dtoOut = await this.dao.listByUuId(awid, dtoIn.uuId)
    }catch(e){
      throw e;
    }

    //HDS 4 - Return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap
    return dtoOut;
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("updateSchoolMagazineDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createSchoolMagazineUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let schoolMagazineObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(schoolMagazineObject).length === 0){
      throw new Errors.Update.SchoolMagazineNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new schoolMagazine object
    let newSchoolMagazine = {
      ...schoolMagazineObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
      dtoOut = await this.dao.update(newSchoolMagazine)
    }catch(e){
      throw e;
    }

    //HDS 5 - Return filled dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("deleteSchoolMagazineDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createSchoolMagazineUnsuportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let schoolMagazineObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(schoolMagazineObject).length === 0){
      throw new Errors.Delete.SchoolMagazineNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Remove article from DB
    let dtoOut = {}
    try {
      await this.dao.remove(awid, dtoIn.id)
    }catch (e){
      throw new Errors.Delete.DeleteSchoolMagazineByDaoFailed({uuAppErrorMap}, {cause: e})
    }

    //HDS 4 return properly filled out dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listSchoolMagazineDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getSchoolMagazineUnsuportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    //HDS 2 Get itemList of schoolMagazines
    let dtoOut = await this.dao.list(awid)

    //HDS 3 - Return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async get(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("getSchoolMagazineDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getSchoolMagazineUnsuportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    // HDS 2 - get schoolMagazine from DB
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
    let validationResult = this.validator.validate("createSchoolMagazineDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createSchoolMagazineUnsuportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // HDS 2 - get author uuId and Name and add it to dtoIn
    let uuIdentity = session.getIdentity().getUuIdentity();
    let userObject = await this.userDao.getByUserUuId(awid, uuIdentity);
    dtoIn.authorUuId = uuIdentity;
    dtoIn.authorName = userObject.firstName + " " + userObject.lastName;
    dtoIn.awid = awid;
    let dtoOut = {};

    // HDS 3 - Database entry
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

module.exports = new SchoolMagazineAbl();
