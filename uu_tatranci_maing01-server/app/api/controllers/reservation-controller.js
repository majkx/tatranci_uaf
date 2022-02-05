"use strict";
const ReservationAbl = require("../../abl/reservation-abl.js");

class ReservationController {

  listByUuId(ucEnv) {
    return ReservationAbl.listByUuId(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  update(ucEnv) {
    return ReservationAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  updateShopCardOpen(ucEnv) {
    return ReservationAbl.updateShopCardOpen(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  updateShopCardClosed(ucEnv) {
    return ReservationAbl.updateShopCardClosed(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  updateShopCardCanceled(ucEnv) {
    return ReservationAbl.updateShopCardCanceled(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  delete(ucEnv) {
    return ReservationAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return ReservationAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listInitial(ucEnv) {
    return ReservationAbl.listInitial(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listOpen(ucEnv) {
    return ReservationAbl.listOpen(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listClosed(ucEnv) {
    return ReservationAbl.listClosed(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listCanceled(ucEnv) {
    return ReservationAbl.listCanceled(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  get(ucEnv) {
    return ReservationAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return ReservationAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

}

module.exports = new ReservationController();
