/* eslint-disable */
const createEditorDtoInType = shape({
  email: string(200),
  telephoneNumber: string(200),
  rfidNumber: string(200),
  numberOfPost: string(200)
});
const getEditorDtoInType = shape({
  id: id().isRequired()
});
const listEditorDtoInType = shape({

});
const deleteEditorDtoInType = shape({
  id: id().isRequired()
});
const updateEditorDtoInType = shape({
  email: string(200),
  telephoneNumber: string(200),
  access: string(200),
  rfidNumber: string(200),
  numberOfPost: string(200)
});
