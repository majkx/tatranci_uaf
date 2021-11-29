"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/article-error.js");
const ObjectId = require('mongodb').ObjectID;

const Warnings = {
  createArticleUnsuportedKeys : {
    code:"createArticleUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getArticleUnsuportedKeys: {
    code:"getArticleUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class ArticleAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("article");
    this.editorDao = DaoFactory.getDao("editor")
  }

  async listByUuId(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listArticleByUuIdDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getArticleUnsuportedKeys.code,
      Errors.List.InvalidDtoIn
    );

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
    let validationResult = this.validator.validate("updateArticleDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createArticleUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let articleObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(articleObject).length === 0){
      throw new Errors.Update.ArticleNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new article object
    let newArticle = {
      ...articleObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
    dtoOut = await this.dao.update(newArticle)
    }catch(e){
      throw e;
    }

    //HDS 5 - Return filled dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("deleteArticleDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createArticleUnsuportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let articleObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(articleObject).length === 0){
      throw new Errors.Delete.ArticleNotFound({uuAppErrorMap}, {id: dtoIn.id})
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
      throw new Errors.Delete.DeleteArticleByDaoFailed({uuAppErrorMap}, {cause: e})
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
    let validationResult = this.validator.validate("getArticleDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getArticleUnsuportedKeys.code,
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
    let validationResult = this.validator.validate("createArticleDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createArticleUnsuportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // HDS 2 - get author uuId and Name and add it to dtoIn
    let uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.authorUuId = uuIdentity;
    //dtoIn.id = ObjectId();
    dtoIn.awid = awid;
    let dtoOut = {};

    // HDS 3 - Zapis do databazi
    try {
      dtoOut = await this.dao.create(dtoIn)
    } catch(e){
      throw new Errors.Create.CreateArticleDaoFailed({uuAppErrorMap}, { cause: e });
    }

    // HDS 4 - Return object
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

}

module.exports = new ArticleAbl();
