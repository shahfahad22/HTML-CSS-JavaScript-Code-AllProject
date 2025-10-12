import { getProductFormLs } from "./getCardProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart =(id)=>{
    let cartProducts = getProductFormLs();
    cartProducts = cartProducts.filter((curProd)=> curProd.id !== id)
localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

 const cardToRemove = document.querySelector(`#card${id}`);
  if (cardToRemove) {
    cardToRemove.remove();
    showToast("Delete", id);
  }
  updateCartValue(cartProducts)
}


