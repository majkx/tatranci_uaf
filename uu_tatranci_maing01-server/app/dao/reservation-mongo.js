"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ReservationMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, personId: 1 });
    await super.createIndex({ awid: 1, bookingDate: 1 });
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

module.exports = ReservationMongo;
