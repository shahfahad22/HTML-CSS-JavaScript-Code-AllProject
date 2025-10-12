import { getProductFormLs } from "./getCardProduct";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.getElementById(`card${id}`);
  const productQuantity = currentCardElement.querySelector(".product-quantity");
  const productPrice = currentCardElement.querySelector(".product-price");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProduct = getProductFormLs();

  let existingProd = localCartProduct.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = Number(existingProd.price);
  } else {
    localStoragePrice = price;
    price = price;
  }
  if (event.target.classList.contains("cart-increment")) {
    if (quantity < stock) {
      quantity += 1;
    }
  }
  if (event.target.classList.contains("cart-decrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  localStoragePrice = price * quantity;
  //   localStoragePrice = Number(localStoragePrice.toFixed(2))
  localStoragePrice = Math.round(localStoragePrice);

  let updateCart = { id, quantity, price: localStoragePrice };

  updateCart = localCartProduct.map((curProd) => {
    return curProd.id === id ? updateCart : curProd;
  });
  //      let updatedCart = localCartProduct.map((curProd) =>
  //     curProd.id === id ? updatedProd : curProd
  //   );
  localStorage.setItem("cartProducts", JSON.stringify(updateCart));

  productQuantity.innerText = quantity;
  // productPrice.innerText = `PKR ${localStoragePrice.toFixed(2)}`;
  //   productPrice.innerText = `PKR ${localStoragePrice}`;
  productPrice.innerText = `PKR ${localStoragePrice.toLocaleString("en-PK")}`;

  updateCartProductTotal()
};


