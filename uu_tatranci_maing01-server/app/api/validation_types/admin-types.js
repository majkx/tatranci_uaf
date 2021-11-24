/* eslint-disable */
const createAdminDtoInType = shape({
  uuId: uuIdentity().isRequired()
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
  uuId: uuIdentity(),
  firstName: string(200),
  lastName: string(),
  email: string(200),
  telephoneNumber: string(200),
  rfidNumber: string(200)
});
