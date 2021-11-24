/* eslint-disable */
const createSellerDtoInType = shape({
  uuId: uuIdentity().isRequired(),
  sellerNumber: string().isRequired(),
  position: string().isRequired(),
  salary: string(),
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
  id: id().isRequired(),
  sellerNumber: string(),
  position: string(),
  email: string(200),
  telephoneNumber: string(200),
  timeWorked: string(),
  salary: string(),
  rfidNumber: string(200)
})
