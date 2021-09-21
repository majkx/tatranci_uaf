"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ReportMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, authorId: 1 });
  }

}

module.exports = ReportMongo;
