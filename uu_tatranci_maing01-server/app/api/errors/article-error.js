"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const ARTICLE_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}article/`;

const Create = {
  UC_CODE: `${ARTICLE_ERROR_PREFIX}create/`,
  
};

module.exports = {
  Create
};
