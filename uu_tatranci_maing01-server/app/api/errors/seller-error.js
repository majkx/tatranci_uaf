"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const SELLER_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}seller/`;

const Create = {
  UC_CODE: `${SELLER_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Get = {
  UC_CODE: `${SELLER_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Delete = {
  UC_CODE: `${SELLER_ERROR_PREFIX}delete/`,

};

const List = {
  UC_CODE: `${SELLER_ERROR_PREFIX}list/`,

};

const Update = {
  UC_CODE: `${SELLER_ERROR_PREFIX}update/`,

};

module.exports = {
  Update,
  List,
  Delete,
  Get,
  Create
};
