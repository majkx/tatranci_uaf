/* eslint-disable */
const createSellerDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
})
const getSellerDtoInType = shape({
  id: id().isRequired()
})
const listSellerDtoInType = shape({

})
const deleteSellerDtoInType = shape({
  id: id().isRequired()
})
const updateSellerDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
})
