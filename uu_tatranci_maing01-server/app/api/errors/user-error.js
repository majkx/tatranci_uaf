"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const USER_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}user/`;

const Create = {
  UC_CODE: `${USER_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CreateUserDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}createUserDaoFailed`;
      this.message = "Creation of user failed on DAO.";
    }
  },
};

const Get = {
  UC_CODE: `${USER_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${USER_ERROR_PREFIX}list/`,

};

const Delete = {
  UC_CODE: `${USER_ERROR_PREFIX}delete/`,

};

const Update = {
  UC_CODE: `${USER_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  UserNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}userNotFound`;
      this.message = "User with given ID was not found.";
    }
  },

};

module.exports = {
  Update,
  Delete,
  List,
  Get,
  Create
};
