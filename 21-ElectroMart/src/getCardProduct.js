import { updateCartValue } from "./updateCartValue";


export const getProductFormLs =() => {
    let cartProducts = localStorage.getItem("cartProducts");    
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    updateCartValue(cartProducts)
    return cartProducts;
};
