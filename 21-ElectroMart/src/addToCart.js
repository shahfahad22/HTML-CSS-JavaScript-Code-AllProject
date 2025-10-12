import { getProductFormLs } from "./getCardProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getProductFormLs();
export const addTocart =(event, id , stock)=>{

    let arrLocalStorageProduct = getProductFormLs();
const currentProdElm = document.querySelector(`#card${id}`)
let quantity = currentProdElm.querySelector('.product-quantity').innerText;
 let price = currentProdElm.querySelector('.product-price').innerText;
//  console.log(quantity, price)

price = price.replace("PKR", "").trim()

let existingProd = arrLocalStorageProduct.find((curProd)=> curProd.id ===id);

if(existingProd && quantity > 1){
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity)
    let updateCart = {id , quantity, price};

    updateCart = arrLocalStorageProduct.map((curProd)=>{
        return curProd.id === id ? updateCart : curProd;
    })
    localStorage.setItem('cartProducts', JSON.stringify(updateCart))
    showToast("add", id);
}

if(existingProd){
    return false;
}


quantity = Number(quantity)
price =  Number( price * quantity )

arrLocalStorageProduct.push({id, quantity, price});
localStorage.setItem('cartProducts', JSON.stringify(arrLocalStorageProduct))


updateCartValue(arrLocalStorageProduct)

 showToast("add", id);
}