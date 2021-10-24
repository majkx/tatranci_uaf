/* eslint-disable */
const createUserDtoInType = shape({
  uuId: uuIdentity().isRequired(),
  firstName: string(200).isRequired(),
  lastName: string().isRequired(),
  email: string(200).isRequired(),
  telephoneNumber: string(200).isRequired(),
  credit: string(200),
  penalties: string(200),
  rfidNumber: string(200).isRequired()
});
const getUserDtoInType = shape({
  id: id().isRequired()
});
const listUserDtoInType = shape({

});
const deleteUserDtoInType = shape({
  id: id().isRequired()
});
const updateUserDtoInType = shape({
  email: string(200),
  telephoneNumber: string(200),
  credit: string(200),
  penalties: string(200),
  access: string(200),
  rfidNumber: string(200)
});
