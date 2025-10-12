import { getProductFormLs } from "./getCardProduct";

export const updateCartProductTotal =()=>{
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let localCartProduct = getProductFormLs();
    let initialValue = 0;
    let totalProductPrice = localCartProduct.reduce((accum, curElm)=>{
        let productPrice = parseInt(curElm.price) || 0
        return accum + productPrice;
    },initialValue)
    console.log(totalProductPrice)

    productSubTotal.textContent = totalProductPrice
    productFinalTotal.textContent = totalProductPrice + 50;

    
}