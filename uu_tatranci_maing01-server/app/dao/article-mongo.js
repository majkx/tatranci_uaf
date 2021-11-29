"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ArticleMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, author: 1 });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    let filter = {
      awid: awid,
      id: id
    }
    return await super.findOne(filter);
  }

  async update(uuObject) {
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

  async listByUuId(awid, uuIdentity) {
    return await super.find({ awid, authorUuId: uuIdentity })
  }


  // OR function
  // async listByUuId(awid, uuIdentity) {
  //   return await super.find(
  //     {
  //       $or: [{ awid }, { authorUuId: uuIdentity }]
  //     });
  // }
}

  module.exports = ArticleMongo;
