/* eslint-disable */
const createAdminDtoInType = shape({
  email: string(200),
  telephoneNumber: string(200),
  access: string(200),
  rfidNumber: string(200)
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
  email: string(200),
  telephoneNumber: string(200),
  access: string(200),
  rfidNumber: string(200)
});
