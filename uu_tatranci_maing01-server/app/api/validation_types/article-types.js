/* eslint-disable */
const createArticleDtoInType = shape({
  name : string(200).isRequired(),
  desc: uu5String(16000).isRequired(),
  content: uu5String(16000).isRequired(),
  titleImg: uri(),
  autorsUuid: uuIdentity().isRequired(),
  autorsName: string()
});
const getArticleDtoInType = shape({
  id: id().isRequired()
});
const listArticleDtoInType = shape({

});
const deleteArticleDtoInType = shape({
  id: id().isRequired()
});
const updateArticleDtoInType = shape({
  id: id(),
  desc: uu5String(16000),
  content: uu5String(16000),
  autorsUuid: uuIdentity(),
  titleImg: uri(),
  autorsName: string()
});
