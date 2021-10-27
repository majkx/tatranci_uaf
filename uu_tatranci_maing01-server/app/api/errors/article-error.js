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
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const Delete = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ArticleNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}articleNotFound`;
      this.message = "Article with given ID was not found.";
    }
  },

  DeleteArticleByDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}removeArticleDaoFailed`;
      this.message = "Removal of article failed on DAO.";
    }
  },
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

const ListByUuId = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}listByUuId/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListByUuId.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  AuthorDoesNotExists: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidAuthorUuId`;
      this.message = "Author with given uuId does not exists.";
    }
  },

};

module.exports = {
  ListByUuId,
  Update,
  Delete,
  List,
  Get,
  Create
};
