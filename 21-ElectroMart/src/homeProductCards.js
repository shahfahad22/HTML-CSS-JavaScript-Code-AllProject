import { addTocart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.getElementById("productContainer")
const productTamplete = document.getElementById("product-tamplete")



export const showProductContainer =(product) => {
    if(!product){
        return false;
    }
    product.forEach((curProd) => {
        const {id, name, category , brand, price, stock, image, description} = 
        curProd;

        const productClone = document.importNode(productTamplete.content, true)

        productClone.querySelector('#card-value').setAttribute("id", `card${id}`)
         productClone.querySelector('.category').textContent = category;
         productClone.querySelector('.product-name').textContent = name;
         productClone.querySelector('.product-image').src= image;
         productClone.querySelector('.product-image').alt= name;
         productClone.querySelector('.product-stock').textContent = stock;
         productClone.querySelector('.product-description').textContent = description;
         productClone.querySelector('.product-price').textContent = `PKR${price}`
         productClone.querySelector('.product-actual-price').textContent =  `PKR${price * 4}`;

         productClone.querySelector('.stock-element').addEventListener('click', (event)=>{
            homeQuantityToggle(event, id , stock)
         })

         productClone.querySelector(".add-to-cart-button").addEventListener('click', (event)=>{
            addTocart(event, id, stock)
         })


         productContainer.appendChild(productClone)


    });
}