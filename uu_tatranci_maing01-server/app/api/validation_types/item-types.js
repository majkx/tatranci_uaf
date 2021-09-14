/* eslint-disable */
const createItemDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
});
const getItemDtoInType = shape({
  id: id().isRequired()
});
const listItemDtoInType = shape({

});
const deleteItemDtoInType = shape({
  id: id().isRequired()
})
const updateItemDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
})
