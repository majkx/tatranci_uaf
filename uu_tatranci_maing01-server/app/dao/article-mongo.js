"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ArticleMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, author: 1 });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id){
    let filter = {
      awid: awid,
      id: id
    }
    return await super.findOne(filter);
  }

}

module.exports = ArticleMongo;
