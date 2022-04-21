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

    //HDS 3 - Prepare new editor object
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

    let updatedArticles = [];
    console.log(editorObject);
    if(Object.keys(editorObject).length !== 0){
      let articles = await this.articledao.listByUuId(awid,editorObject.uuId)
      console.log(articles);
      if (articles.itemList.length !== 0 ){
        let newEditor = await this.dao.getByUuIdentity(dtoIn.newAuthorUuId);
        let authorName = await this.userdao.getByUserUuId(dtoIn.newAuthorUuId);
        console.log(articles)
        for(let article of articles) {
          article.authorUuId = newEditor.uuId;
          article.authorName = authorName.firstName+" "+authorName.lastName;
          let updatedArticle = await this.dao.update(updatedArticles);
          updatedArticles.push(updatedArticle);
        }
      }
    }
    //HDS 3 - Remove editor from DB
    let dtoOut = {}
    try {
      await this.dao.remove(awid, dtoIn.id)
    }catch (e){
      throw new Errors.Delete.DeleteEditorByDaoFailed({uuAppErrorMap}, {cause: e})
    }

    //HDS 4 return properly filled out dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.updatedArticles = updatedArticles;
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

    //HDS 2 Get itemList of editors
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

    // HDS 2 - get editor from DB
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
    dtoIn.awid = awid;
    let dtoOut = {};

    // HDS 3 - Database entry
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
