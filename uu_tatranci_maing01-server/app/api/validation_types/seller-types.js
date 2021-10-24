/* eslint-disable */
const createSellerDtoInType = shape({
  sellerNumber: string().isRequired(),
  position: string().isRequired(),
  email: string(200).isRequired(),
  telephoneNumber: string(200).isRequired(),
  timeWorked: string(),
  salary: string(),
  rfidNumber: string(200).isRequired()
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
  sellerNumber: string(),
  position: string(),
  email: string(200),
  telephoneNumber: string(200),
  timeWorked: string(),
  salary: string(),
  rfidNumber: string(200)
})
