import { Order } from "./modules/order.js";

const form = document.querySelector("#add-order");
const deleteBtn = document.querySelector("#added-items");
const myOrder = new Order();

form.addEventListener("submit", () => {
  const item = document.querySelector("#item");
  const price = document.querySelector("#price");
  const submitOrder = new Order();

  submitOrder.addItem(item.value, price.value);
  event.preventDefault();
});

deleteBtn.addEventListener("click", () => myOrder.removeItem());
