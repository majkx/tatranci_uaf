/* eslint-disable */
const createEditorDtoInType = shape({
  email: string(200).isRequired(),
  telephoneNumber: string(200).isRequired(),
  rfidNumber: string(200).isRequired(),
  numberOfPost: string(),
  uuIdentity: uuIdentity().isRequired()
});
const getEditorDtoInType = shape({
  id: id().isRequired(),
  uuId: uuIdentity().isRequired("id")
});
const listEditorDtoInType = shape({

});
const deleteEditorDtoInType = shape({
  id: id().isRequired()
});
const updateEditorDtoInType = shape({
  email: string(200),
  telephoneNumber: string(200),
  rfidNumber: string(200),
  numberOfPost: string()
});
