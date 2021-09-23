"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const ADMIN_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}admin/`;

const Create = {
  UC_CODE: `${ADMIN_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Get = {
  UC_CODE: `${ADMIN_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${ADMIN_ERROR_PREFIX}list/`,

};

const Delete = {
  UC_CODE: `${ADMIN_ERROR_PREFIX}delete/`,

};

const Update = {
  UC_CODE: `${ADMIN_ERROR_PREFIX}update/`,

};

module.exports = {
  Update,
  Delete,
  List,
  Get,
  Create
};
