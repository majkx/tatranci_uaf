/* eslint-disable */
const createReservationDtoInType = shape({
  state: oneOf(["initial", "open", "closed", "canceled" ]),
  count: integer().isRequired(),
  totalPrice: integer().isRequired(),
  products: array(
    shape({
      priceIndividually: float(),
      productId: string(200),
      productName: string(200),
      productPrice: integer(),
      productCount: integer()
    })
  ).isRequired()


});

const getReservationDtoInType = shape({
  id: id().isRequired()
});
const getReservationInitialDtoInType = shape({
  id: id().isRequired()
});
const listReservationDtoInType = shape({

});
const listReservationInitialDtoInType = shape({

});
const listReservationOpenDtoInType = shape({

});
const listReservationClosedDtoInType = shape({

});
const listReservationCanceledDtoInType = shape({

});
const deleteReservationDtoInType = shape({
  id: id().isRequired()
});
const updateReservationDtoInType = shape({
  id: id().isRequired(),
  state: oneOf(["open", "closed", "canceled" ]),
  count: integer(),
  totalPrice: integer(),
  products: array(
    shape({
      priceIndividually: float(),
      productId: string(200),
      productName: string(200),
      productPrice: integer(),
      productCount: integer()
    })
  )
});
const updateReservationShopCardOpenDtoInType = shape({
  id: id().isRequired(),
  state: oneOf(["open", "closed", "canceled" ]),
});
const updateReservationShopCardClosedDtoInType = shape({
  id: id().isRequired(),
  state: oneOf(["closed", "canceled" ]),
});
const updateReservationShopCardCanceledDtoInType = shape({
  id: id().isRequired(),
  state: oneOf(["canceled" ]),
});
const listReservationByUuIdDtoInType = shape({
  uuId: uuIdentity().isRequired()
});
