/* eslint-disable */
const createAdminDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
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
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
});
