"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/editor-error.js");

const Warnings = {
  createEditorUnsuportedKeys : {
    code:"createEditorUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getEditorUnsuportedKeys: {
    code:"getEditorUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class EditorAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("editor");
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("updateEditorDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createEditorUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let editorObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(editorObject).length === 0){
      throw new Errors.Update.editorNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new article object
    let newEditor = {
      ...editorObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
      dtoOut = await this.dao.update(newEditor)
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

  async get(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("getEditorDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getEditorUnsuportedKeys.code,
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
    let validationResult = this.validator.validate("createEditorDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createEditorUnsuportedKeys.code,
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

module.exports = new EditorAbl();
