"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const ARTICLE_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}article/`;

const Create = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  CreateArticleDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}createArticleDaoFailed`;
      this.message = "Creation of article failed on DAO.";
    }
  },
};

const Get = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}list/`,

};

const Delete = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}delete/`,

};

const Update = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ArticleNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}articleNotFound`;
      this.message = "Article with given ID was not found.";
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
