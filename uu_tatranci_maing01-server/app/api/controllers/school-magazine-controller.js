"use strict";
const SchoolMagazineAbl = require("../../abl/school-magazine-abl.js");

class SchoolMagazineController {

  listByUuId(ucEnv) {
    return SchoolMagazineAbl.listByUuId(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  update(ucEnv) {
    return SchoolMagazineAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  delete(ucEnv) {
    return SchoolMagazineAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  list(ucEnv) {
    return SchoolMagazineAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  get(ucEnv) {
    return SchoolMagazineAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  create(ucEnv) {
    return SchoolMagazineAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

}

module.exports = new SchoolMagazineController();
