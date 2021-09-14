/* eslint-disable */
const createUserDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
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
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
});
