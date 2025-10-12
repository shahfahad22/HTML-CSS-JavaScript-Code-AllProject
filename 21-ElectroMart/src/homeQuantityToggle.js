export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.getElementById(`card${id}`);
  const productQuantity = currentCardElement.querySelector(".product-quantity");

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  // yaha per quanttiy ke value cheak kerraha ha  
  if (event.target.classList.contains("cart-increment")) {
    if (quantity < stock) {
      quantity += 1;
    }
  }

  if (event.target.classList.contains("cart-decremenet")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.textContent = quantity;
  productQuantity.setAttribute("data-quantity", quantity);
};
