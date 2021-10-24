/* eslint-disable */
const createSchoolMagazineDtoInType = shape({
  name: string(200).isRequired(),
  magazineNumber: string(200).isRequired(),
  numbersOfPages: string(200).isRequired(),
  articles: array(
    shape(
      {
        titleOfPost: string(200),
        category: string(200),
        content: string(200)
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
  name: string(200),
  magazineNumber: string(200),
  numbersOfPages: string(200),
  articles: [
    {
      titleOfPost: string(200),
      category: string(200),
      content: string(200)
    }
  ]
});
