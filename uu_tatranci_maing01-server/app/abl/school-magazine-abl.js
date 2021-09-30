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
  }

  async update(awid, dtoIn) {

  }

  async delete(awid, dtoIn) {

  }

  async list(awid, dtoIn) {

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
    let validationResult = this.validator.validate("createSchoolMagazineDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createSchoolMagazineUnsuportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // HDS 2 - get author uuId and Name and add it to dtoIn
    //TODO: Zjednotit s dokumentaciou
    let uuIdentity = session.getIdentity().getUuIdentity();
    let name = session.getIdentity().getName();
    dtoIn.authorUuId = uuIdentity;
    dtoIn.authorName = name;
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

module.exports = new SchoolMagazineAbl();
