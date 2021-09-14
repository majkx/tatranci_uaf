/* eslint-disable */
const createSchoolMagazineDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
});
const getSchoolMagazineDtoInType = shape({
  id: id().isRequired()
});
const listSchoolMagazineDtoInType = shape({

});
const deleteSchoolMagazineDtoInType = shape({
  id: id().isRequired()
});
const updateSchoolMagazineDtoInType = shape({
  code: code().isRequired(),
  name: string(200),
  desc: uu5String(16000),
  state: oneOf(["open","closed","tested"]),
  image: uri()
});
