/* eslint-disable */
const createSellerDtoInType = shape({
  uuId: uuIdentity().isRequired(),
  sellerNumber: string(),
  position: string(),
  salary: string(),
  firstName: string(200),
  lastName: string(),
  email: string(200),
  telephoneNumber: string(200),
  timeWorked: string(),
  rfidNumber: string(200)
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
  uuId: uuIdentity(),
  firstName: string(200),
  lastName: string(),
  sellerNumber: string(),
  position: string(),
  email: string(200),
  telephoneNumber: string(200),
  timeWorked: string(),
  salary: string(),
  rfidNumber: string(200)
})
