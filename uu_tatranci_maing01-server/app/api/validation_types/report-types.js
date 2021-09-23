/* eslint-disable */
const createReportDtoInType = shape({
  titleOfPost: string(200).isRequired(),
  category: string(200),
  videoURL: uri().isRequired(),
  embedCode: string()
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
