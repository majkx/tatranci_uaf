"use strict";

const TatranciMainUseCaseError = require("./tatranci-main-use-case-error.js");
const RESERVATION_ERROR_PREFIX = `${TatranciMainUseCaseError.ERROR_PREFIX}reservation/`;

const Create = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CreateReservationDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}createReservationDaoFailed`;
      this.message = "Creation of reservation failed on DAO.";
    }
  },
};

const Get = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const GetInitial = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetInitial.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const ListInitial = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListInitial.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const ListOpen = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListOpen.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const ListClosed = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListClosed.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const ListCanceled = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListCanceled.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};


const Delete = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ReservationNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}reservationNotFound`;
      this.message = "Reservation with given ID was not found.";
    }
  },

  DeleteReservationByDaoFailed: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}removeReservationDaoFailed`;
      this.message = "Removal of reservation failed on DAO.";
    }
  },
};

const Update = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ReservationNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}reservationNotFound`;
      this.message = "Reservation with given ID was not found.";
    }
  },

};

const UpdateShopCardOpen = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}updateShopCardOpen/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateShopCardOpen.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ReservationNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateShopCardOpen.UC_CODE}reservationNotFound`;
      this.message = "Reservation with given ID was not found.";
    }
  },

};

const UpdateShopCardClosed = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}updateShopCardClosed/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateShopCardClosed.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ReservationNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateShopCardClosed.UC_CODE}reservationNotFound`;
      this.message = "Reservation with given ID was not found.";
    }
  },

};

const UpdateShopCardCanceled = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}updateShopCardCanceled/`,

  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateShopCardCanceled.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ReservationNotFound: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateShopCardCanceled.UC_CODE}reservationNotFound`;
      this.message = "Reservation with given ID was not found.";
    }
  },

};

const ListByUuId = {
  UC_CODE: `${RESERVATION_ERROR_PREFIX}listByUuId/`,
  InvalidDtoIn: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListByUuId.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  AuthorDoesNotExists: class extends TatranciMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidAuthorUuId`;
      this.message = "Author with given uuId does not exists.";
    }
  },
};

module.exports = {
  ListByUuId,
  Update,
  UpdateShopCardOpen,
  UpdateShopCardClosed,
  UpdateShopCardCanceled,
  Delete,
  List,
  Get,
  Create
};
