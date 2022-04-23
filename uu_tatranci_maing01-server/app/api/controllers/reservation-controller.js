"use strict";
const ReservationAbl = require("../../abl/reservation-abl.js");

class ReservationController {

  listByUuId(ucEnv) {
    return ReservationAbl.listByUuId(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  update(ucEnv) {
    return ReservationAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  updateShopCardOpen(ucEnv) {
    return ReservationAbl.updateShopCardOpen(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  updateShopCardClosed(ucEnv) {
    return ReservationAbl.updateShopCardClosed(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  updateShopCardCanceled(ucEnv) {
    return ReservationAbl.updateShopCardCanceled(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  delete(ucEnv) {
    return ReservationAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  list(ucEnv) {
    return ReservationAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  listInitial(ucEnv) {
    return ReservationAbl.listInitial(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  listOpen(ucEnv) {
    return ReservationAbl.listOpen(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  listClosed(ucEnv) {
    return ReservationAbl.listClosed(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  listCanceled(ucEnv) {
    return ReservationAbl.listCanceled(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  get(ucEnv) {
    return ReservationAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  getInitial(ucEnv) {
    return ReservationAbl.getInitial(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getAuthorizationResult());
  }

  create(ucEnv) {
    return ReservationAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

}

module.exports = new ReservationController();
