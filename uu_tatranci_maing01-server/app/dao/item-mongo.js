"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ItemMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, itemCategory: 1 });
    await super.createIndex({ awid: 1, price: 1 });
  }

}

module.exports = ItemMongo;
