/* eslint-disable */
const createReservationDtoInType = shape({
  state: oneOf(["open","closed","canceled"]).isRequired(),
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
const listReservationDtoInType = shape({

});
const deleteReservationDtoInType = shape({
  id: id().isRequired()
});
const updateReservationDtoInType = shape({
  state: oneOf(["open","closed","canceled"]),
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
