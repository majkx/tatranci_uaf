"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/item-error.js");

const Warnings = {
  createItemUnsuportedKeys : {
    code:"createItemUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  },

  getItemUnsuportedKeys: {
    code:"getItemUnsuportedKeys",
    message:"DtoIn contains unsuported keys"
  }
};

class ItemAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("item");
    this.userDao = DaoFactory.getDao("user")
  }

  async listByUuId(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listItemByUuIdDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getItemUnsuportedKeys.code,
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
    let validationResult = this.validator.validate("updateItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createItemUnsuportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let itemObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(itemObject).length === 0){
      throw new Errors.Update.ItemNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Prepare new item object
    let newItem = {
      ...itemObject,
      ...dtoIn
    }

    // HDS 4 - Update object in Database
    let dtoOut = {};

    try {
      dtoOut = await this.dao.update(newItem)
    }catch(e){
      throw e;
    }

    //HDS 5 - Return filled dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("deleteItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createItemUnsuportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    //HDS 2 - Check if updated object exists
    let itemObject = await this.dao.get(awid, dtoIn.id);

    // A2 - throw error
    if(Object.keys(itemObject).length === 0){
      throw new Errors.Delete.ItemNotFound({uuAppErrorMap}, {id: dtoIn.id})
    }

    //HDS 3 - Remove item from DB
    let dtoOut = {}
    try {
      await this.dao.remove(awid, dtoIn.id)
    }catch (e){
      throw new Errors.Delete.DeleteItemByDaoFailed({uuAppErrorMap}, {cause: e})
    }

    //HDS 4 return properly filled out dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getItemUnsuportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    //HDS 2 Get itemList of items
    let dtoOut = await this.dao.list(awid)

    //HDS 3 - Return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }
  async listZlavnene(awid, dtoIn, uuAppErrorMap = {}) {
    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("listItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getItemUnsuportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    //HDS 2 Get itemList of items
    let items = await this.dao.list(awid)
      let dtoOut = items.itemList.filter(item => item.discount > 0)

    //HDS 3 - Return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async get(awid, dtoIn, uuAppErrorMap = {}) {

    // HDS 1 - validation of dtoIn
    let validationResult = this.validator.validate("getItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.getItemUnsuportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    // HDS 2 - get item from DB
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
    let validationResult = this.validator.validate("createItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      Warnings.createItemUnsuportedKeys.code,
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

module.exports = new ItemAbl();
