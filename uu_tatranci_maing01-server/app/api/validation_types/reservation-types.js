/* eslint-disable */
const createReservationDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
  count: "(value)", // (description)
  priceIndividually: "(value)", // (description)
  totalPrice: "(value)", // (description)
  reservationID: "(value)", // (description)
  personID: "(value)", // (description)
  bookingDate: "(value)", // (description)
  numberOfReserved: "(value)", // (description)
  condition: "(value)", // (description)
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
