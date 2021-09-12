"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/admin-error.js");

const WARNINGS = {

};

class AdminAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("admin");
  }

  async update(awid, dtoIn) {
    
  }

  async delete(awid, dtoIn) {
    
  }

  async list(awid, dtoIn) {
    
  }

  async get(awid, dtoIn) {
    
  }

  async create(awid, dtoIn) {
    
  }

}

module.exports = new AdminAbl();
