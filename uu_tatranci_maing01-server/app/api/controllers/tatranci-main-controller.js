"use strict";
const TatranciMainAbl = require("../../abl/tatranci-main-abl.js");

class TatranciMainController {
  init(ucEnv) {
    return TatranciMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new TatranciMainController();
