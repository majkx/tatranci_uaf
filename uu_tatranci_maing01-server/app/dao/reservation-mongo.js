"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ReservationMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ReservationMongo;
