"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const REPORT_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}report/`;

const Create = {
  UC_CODE: `${REPORT_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CreateReportDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}createReportDaoFailed`;
      this.message = "Creation of report failed on DAO.";
    }
  },
};

const Get = {
  UC_CODE: `${REPORT_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${REPORT_ERROR_PREFIX}list/`,

};

const Delete = {
  UC_CODE: `${REPORT_ERROR_PREFIX}delete/`,

};

const Update = {
  UC_CODE: `${REPORT_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ReportNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}reportNotFound`;
      this.message = "Report with given ID was not found.";
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
