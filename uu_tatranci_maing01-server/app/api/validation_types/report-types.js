/* eslint-disable */
const createReportDtoInType = shape({
  titleOfPost: string(200).isRequired(),
  desc: uu5String().isRequired(),
  category: string(200),
  videoURL: uri().isRequired(),
  embedCode: string().isRequired()
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
  titleOfPost: string(200).isRequired(),
  category: string(200),
  videoURL: uri().isRequired(),
  embedCode: string()
});
