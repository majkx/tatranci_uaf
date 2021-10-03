"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/report-error.js");

const Warnings = {
  createReportUnsuportedKeys : {
    code:"createReportUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getReportUnsuportedKeys: {
    code:"getReportUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class ReportAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("report");
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("updateReportDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createReportUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let reportObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(reportObject).length === 0){
      throw new Errors.Update.ReportNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new article object
    let newReport = {
      ...reportObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
      dtoOut = await this.dao.update(newReport)
    }catch(e){
      throw e;
    }

    //HDS 5 - Return filled dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn) {

  }

  async list(awid, dtoIn) {

  }

  async get(awid, dtoIn, uuAppErrorMap) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("getReportDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getReportUnsuportedKeys.code,
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

  async create(awid, dtoIn, session, uuAppErrorMap) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("createReportDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createReportUnsuportedKeys.code,
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

module.exports = new ReportAbl();
