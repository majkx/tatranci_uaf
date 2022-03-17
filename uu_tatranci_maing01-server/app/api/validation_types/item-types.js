/* eslint-disable */
const createItemDtoInType = shape({
  nameOfItem: string(200).isRequired(),
  itemCategory: string(200),
  weight: string(200).isRequired(),
  numberOfPieces: string().isRequired(),
  price: float().isRequired(),
  sellingPrice: string().isRequired(),
  manufacturer: string(200),
  allergens: string(),
  discount: string(200),
  expirationDate: string(),
  dateOfPurchase: string(),
  dateOfDelivery: string(),
  bookingDate: string(),
  numberOfReserved: string(200),
  budget: string(),
  revenue: string(),
  expenses: string(),
  profit: string()
});
const getItemDtoInType = shape({
  id: id().isRequired()
});
const listItemDtoInType = shape({

});
const deleteItemDtoInType = shape({
  id: id().isRequired()
});
const updateItemDtoInType = shape({
  id: id().isRequired(),
  nameOfItem: string(200),
  itemCategory: string(200),
  weight: string(200),
  numberOfPieces: string(),
  price: string().isRequired(),
  sellingPrice: string(),
  manufacturer: string(200),
  allergens: string(),
  discount: string(200),
  expirationDate: string(),
  dateOfPurchase: string(),
  dateOfDelivery: string(),
  bookingDate: string(),
  numberOfReserved: string(200),
  budget: string(),
  revenue: string(),
  expenses: string(),
  profit: string()
});
const listItemByUuIdDtoInType = shape({
  uuId: uuIdentity().isRequired()
});
