/* eslint-disable */
const createItemDtoInType = shape({
  nameOfItem: string(200).isRequired(),
  itemCategory: string(200),
  weight: string(200).isRequired(),
  numberOfPieces: string().isRequired(),
  price: string().isRequired(),
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
})
const updateItemDtoInType = shape({
  nameOfItem: string(200),
  itemCategory: string(200),
  weight: string(200),
  numberOfPieces: string(200),
  price: string(200),
  sellingPrice: string(200),
  manufacturer: string(200),
  allergens: string(200),
  discount: string(200),
  expirationDate: string(200),
  dateOfPurchase: string(200),
  dateOfDelivery: string(200),
  bookingDate: string(200),
  numberOfReserved: string(200),
  budget: string(200),
  revenue: string(200),
  expenses: string(200),
  profit: string(200)
})
