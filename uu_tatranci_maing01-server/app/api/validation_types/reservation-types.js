/* eslint-disable */
const createReservationDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri(),
  count: integer(),
  priceIndividually: float(), // (description)
  totalPrice: integer(), // (description)
  reservationID: id(), // (description)
  personID: id(), // (description)
  bookingDate: date(), // (description)
  numberOfReserved: integer(), // (description)
  condition: string(), // (description)
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
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
});
