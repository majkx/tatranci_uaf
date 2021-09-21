"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ArticleMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, author: 1 });
  }

}

module.exports = ArticleMongo;
