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
    this.articledao = DaoFactory.getDao("article");
    this.reportdao = DaoFactory.getDao("report");
    this.userdao = DaoFactory.getDao("user");
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

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("deleteEditorDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createEditorUnsuportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let editorObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(editorObject).length === 0){
      throw new Errors.Delete.EditorNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    // HDS -- Keď objekt obsahuje cudzie kľúče (mažem editora ktorý má články)
    // Tak najskôr si getnem editora, potom vylistujem jeho články ktorým zmením autora podľa vstupu == na vstupe pribudne forceDelete:true/false a uuId nového autora
    // keď bude forceDelete false, a editor bude mať nejaké články, tak vyhodíme chybu
    // Pokiaľ bude forceDelete true, a editor bude mať nejaké články, zmeníme autora článku na id zo vstupu (dtoIn.newAuthorId)
    // a až následne mažem editora.
    // List podľa filtrov (podľa dtoIn)
    if(Object.keys(editorObject).length !== 0){
      let articles = await this.articledao.listByUuId(awid,editorObject.uuIdentity)
      if (articles.length !== 0 ){
        let newEditor = await this.dao.getByUuIdentity(dtoIn.uuIdentity);
        articles.forEach( article=> {
          article.authorUuId = newEditor;
          article.authorName = name;
        } )
      }
    }
    //HDS 3 - Remove article from DB
    let dtoOut = {}
    try {
      await this.dao.remove(awid, dtoIn.id)
    }catch (e){
      throw new Errors.Delete.DeleteEditorByDaoFailed({uuAppErrorMap}, {cause: e})
    }

    //HDS 4 return properly filled out dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listEditorDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getEditorUnsuportedKeys.code,
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

    let user = await this.userdao.getByUserUuId(awid, dtoIn.UuId);
    dtoIn.firstName = user.firstName;
    dtoIn.lastName = user.lastName;
    dtoIn.email = user.email;
    dtoIn.telephoneNumber = user.telephoneNumber;
    dtoIn.awid = awid;
    //dtoIn.id = ObjectId();
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

module.exports = new EditorAbl();
