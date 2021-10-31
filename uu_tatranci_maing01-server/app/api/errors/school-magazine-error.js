"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const SCHOOL_MAGAZINE_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}schoolMagazine/`;

const Create = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CreateSchoolMagazineDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}createSchoolMagazineDaoFailed`;
      this.message = "Creation of school magazine failed on DAO.";
    }
  },
};

const Get = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const Delete = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchoolMagazineNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}schoolMagazineNotFound`;
      this.message = "SchoolMagazine with given ID was not found.";
    }
  },

  DeleteSchoolMagazineByDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}removeSchoolMagazineDaoFailed`;
      this.message = "Removal of schoolMagazine failed on DAO.";
    }
  },
};

const Update = {
  UC_CODE: `${SCHOOL_MAGAZINE_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchoolMagazineNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}schoolMagazineNotFound`;
      this.message = "SchoolMagazine with given ID was not found.";
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
