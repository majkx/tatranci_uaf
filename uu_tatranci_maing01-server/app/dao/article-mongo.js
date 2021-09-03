"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ArticleMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ArticleMongo;
