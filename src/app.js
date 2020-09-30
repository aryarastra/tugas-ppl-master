import {
  incrementQty,
  decrementQty,
  hitungDiskon,
  hitungSubTotal,
} from "./helpers.js";

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const price = document.querySelector("#price");
const subTotalText = document.querySelector("#subtotal");
const discountCode = document.querySelector("#code");
const confirmButton = document.querySelector("#confirmButton");

incrButton.addEventListener("click", () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotalText.textContent = `Rp ${hitungSubTotal(
    price.value,
    qtyInput.value
  )}`;
});

decrButton.addEventListener("click", () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotalText.textContent = `Rp ${hitungSubTotal(
    price.value,
    qtyInput.value
  )}`;
});

confirmButton.addEventListener("click", () => {
  let subtotal = hitungSubTotal(price.value, qtyInput.value);
  let total = hitungDiskon(subtotal, discountCode.value);
  subTotalText.textContent = `Rp ${total}`;
});
