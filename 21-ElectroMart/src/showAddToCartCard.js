import products from "./api/product.json";
import { fetchQuantitiyFormCartLs } from "./fetchQuantitiyFormCartLs";
import { getProductFormLs } from "./getCardProduct";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";


let cartProducts = getProductFormLs();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

console.log(filterProducts);
let cartElement = document.querySelector(".productCartContainer");
let tampleteContainer = document.querySelector("#product-tamplete");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { id, name, category, price, stock, image } = curProd;
    let productClone = document.importNode(tampleteContainer.content, true);

    const lsActualData = fetchQuantitiyFormCartLs(id, price);

    productClone.querySelector("#card-value").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product-name").textContent = name;
    productClone.querySelector(".product-image").src = image;

    productClone.querySelector(".product-quantity").textContent =
      lsActualData.quantity;
    // productClone.querySelector(".product-price").textContent = lsActualData.price
    productClone.querySelector(
      ".product-price"
    ).textContent = `PKR ${lsActualData.price}`;

    productClone
      .querySelector(".stock-element")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProdFromCart(id);
        updateCartProductTotal();
      });

    cartElement.appendChild(productClone);
  });
};

showCartProduct();

updateCartProductTotal();
