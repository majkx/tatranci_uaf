/* eslint-disable */
const createSchoolMagazineDtoInType = shape({
  name: string(200).isRequired(),
  magazineNumber: string().isRequired(),
  numbersOfPages: string().isRequired(),
  articles: array(
    shape(
      {
        titleOfPost: string(200).isRequired(),
        category: string(200),
        content: string().isRequired()
      })
  )
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
  id: id().isRequired(),
  name: string(200),
  magazineNumber: string(),
  numbersOfPages: string(),
  articles: array(
    shape(
      {
        titleOfPost: string(200),
        category: string(200),
        content: string()
      })
  )
});
const listSchoolMagazineByUuIdDtoInType = shape({
  uuId: uuIdentity().isRequired()
});
