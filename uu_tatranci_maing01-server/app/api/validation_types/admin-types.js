/* eslint-disable */
const createAdminDtoInType = shape({
  email: string(200).isRequired(),
  telephoneNumber: string(200).isRequired(),
  rfidNumber: string(200).isRequired()
});
const getAdminDtoInType = shape({
  id: id().isRequired()
});
const listAdminDtoInType = shape({

});
const deleteAdminDtoInType = shape({
  id: id().isRequired()
});
const updateAdminDtoInType = shape({
  id: id().isRequired(),
  email: string(200),
  telephoneNumber: string(200),
  rfidNumber: string(200)
});
