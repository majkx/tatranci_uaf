/* eslint-disable */
const createArticleDtoInType = shape({
  name : string(200).isRequired(),
  desc: uu5String().isRequired(),
  content: uu5String().isRequired(),
  titleImg: uri()
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
  id: id().isRequired(),
  name : string(200),
  desc: uu5String(200),
  content: uu5String(),
  titleImg: uri()
});

const listArticleByUuIdDtoInType = shape({
  uuId: uuIdentity().isRequired()
});
