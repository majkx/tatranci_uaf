"use strict";
const ArticleAbl = require("../../abl/article-abl.js");

class ArticleController {

  create(ucEnv) {
    return ArticleAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new ArticleController();
