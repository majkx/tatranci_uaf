/* eslint-disable */
const createReportDtoInType = shape({
  autorsUuid: uuIdentity().isRequired(),
  titleOfPost: string(200).isRequire(),
  category: string(200),
  videoURL: uri().isRequired(),
  embedCode: string(),
  autorName: string()
});
const getReportDtoInType = shape({
  id: id().isRequired()
});
const listReportDtoInType = shape({

});
const deleteReportDtoInType = shape({
  id: id().isRequired()
});
const updateReportDtoInType = shape({
  id: id(),
  autorsName: string(),
  titleOfPost: string(),
  category: string(200),
  videoURL: uri(),
  embedCode: string(),
  autorsUuId: uuIdentity(),
});
