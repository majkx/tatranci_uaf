"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SellerMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
  }

}

module.exports = SellerMongo;
