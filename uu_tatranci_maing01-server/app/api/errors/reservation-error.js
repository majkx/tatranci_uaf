"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const RESERVATION_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}reservation/`;

const Create = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CreateReservationDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}createReservationDaoFailed`;
      this.message = "Creation of reservation failed on DAO.";
    }
  },
};

const Get = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}list/`,

};

const Delete = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}delete/`,

};

const Update = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}update/`,

};

module.exports = {
  Update,
  Delete,
  List,
  Get,
  Create
};
