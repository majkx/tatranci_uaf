"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const ITEM_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}item/`;

const Create = {
  UC_CODE: `${ITEM_ERROR_PREFIX}create/`,
  
};

const Get = {
  UC_CODE: `${ITEM_ERROR_PREFIX}get/`,
  
};

const List = {
  UC_CODE: `${ITEM_ERROR_PREFIX}list/`,
  
};

const Delete = {
  UC_CODE: `${ITEM_ERROR_PREFIX}delete/`,
  
};

const Update = {
  UC_CODE: `${ITEM_ERROR_PREFIX}update/`,
  
};

module.exports = {
  Update,
  Delete,
  List,
  Get,
  Create
};
