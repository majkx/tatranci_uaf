"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const SCHOOL_MAGAZINE_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}schoolMagazine/`;

const Create = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}create/`,
  
};

const Get = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}get/`,
  
};

const List = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}list/`,
  
};

const Delete = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}delete/`,
  
};

const Update = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}update/`,
  
};

module.exports = {
  Update,
  Delete,
  List,
  Get,
  Create
};
