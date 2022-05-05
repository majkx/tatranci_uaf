/* eslint-disable */
const createEditorDtoInType = shape({
  uuId: uuIdentity().isRequired(),
  firstName: string(200),
  lastName: string(),
  email: string(200),
  telephoneNumber: string(200),
  numberOfPost: string(200),
  rfidNumber: string(200)
});
const getEditorDtoInType = shape({
  id: id().isRequired(),
  uuId: uuIdentity().isRequired("id")
});
const listEditorDtoInType = shape({

});
const deleteEditorDtoInType = shape({
  id: id().isRequired(),
  newAuthorUuId: uuIdentity().isRequired()
});
const updateEditorDtoInType = shape({
  id: id().isRequired(),
  uuId: uuIdentity(),
  firstName: string(200),
  lastName: string(),
  email: string(200),
  telephoneNumber: string(200),
  numberOfPost: string(200),
  rfidNumber: string(200)
});
