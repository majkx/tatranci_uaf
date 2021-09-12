"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ItemMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ItemMongo;
