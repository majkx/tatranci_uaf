/* eslint-disable */
const createSellerDtoInType = shape({
  sellerNumber: string(200).isRequired(),
  position: string(200).isRequired(),
  email: string(200).isRequired(),
  telephoneNumber: string(200).isRequired(),
  timeWorked: string(200),
  salary: string(200),
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
  sellerNumber: string(200),
  position: string(200),
  email: string(200),
  telephoneNumber: string(200),
  timeWorked: string(200),
  salary: string(200),
  access: string(200),
  rfidNumber: string(200)
})
