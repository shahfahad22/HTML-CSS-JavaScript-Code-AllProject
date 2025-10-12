import { getProductFormLs } from "./getCardProduct";

export const fetchQuantitiyFormCartLs=(id, price) => {
  
  let cartProducts = getProductFormLs();
  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price };


};
