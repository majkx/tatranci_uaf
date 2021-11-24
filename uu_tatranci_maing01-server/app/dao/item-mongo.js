"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ItemMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, itemCategory: 1 });
    await super.createIndex({ awid: 1, price: 1 });
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

  async update(uuObject){
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id
    }
    return await super.findOneAndUpdate(filter, uuObject, "NONE")
  }

  async remove(awid, id) {
    return await super.deleteOne({ awid, id });
  }

  async list(awid) {
    return await super.find({ awid });
  }

  async listByUuId(awid, uuId) {
    return await super.find({ awid ,authorUuId: uuId })
  }
}

module.exports = ItemMongo;
