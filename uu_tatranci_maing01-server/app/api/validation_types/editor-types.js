/* eslint-disable */
const createEditorDtoInType = shape({
  name: string(200).isRequired(),
  desc: uu5String(16000),
  image: uri()
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
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
});
