"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const EDITOR_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}editor/`;

const Create = {
  UC_CODE: `${EDITOR_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CreateEditorDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}createEditorDaoFailed`;
      this.message = "Creation of editor failed on DAO.";
    }
  },
};

const Get = {
  UC_CODE: `${EDITOR_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${EDITOR_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const Delete = {
  UC_CODE: `${EDITOR_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  EditorNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}editorNotFound`;
      this.message = "Editor with given ID was not found.";
    }
  },

  DeleteEditorByDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}removeEditorDaoFailed`;
      this.message = "Removal of editor failed on DAO.";
    }
  },
};

const Update = {
  UC_CODE: `${EDITOR_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  EditorNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}editorNotFound`;
      this.message = "Editor with given ID was not found.";
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
