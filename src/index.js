"use strict";

//checkbox

let checkbox = document.querySelectorAll(".filter-check_checkbox");

checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.nextElementSibling.classList.add("checked");
    } else {
      this.nextElementSibling.classList.remove("checked");
    }
  });
});

//end checkbox

//cart
let btnCart = document.querySelector("#cart");
let modalCart = document.querySelector(".cart");
let cartClose = document.querySelector(".cart-close");

btnCart.addEventListener("click", function () {
  document.body.style.overflow = "hidden";
  modalCart.style.display = "flex";
});

cartClose.addEventListener("click", function () {
  modalCart.style.display = "none";
  document.body.style.overflow = "";
});
//End cart

// Cart Items
let cards = document.querySelectorAll(".goods  .card");
let cardWraper = document.querySelector(".cart-wrapper");
let cardEmpty = document.querySelector("#cart-empty");
let counter = document.querySelector(".counter");

cards.forEach((item) => {
  const btn = item.querySelector("button");

  btn.addEventListener("click", () => {
    let cardClone = item.cloneNode(true);
    cardWraper.append(cardClone);
    cardEmpty.remove();
    showData();
  });
});

function showData() {
  let cardCarts = cardWraper.querySelectorAll(".card");
  counter.textContent = cardCarts.length;
}
//Cart Items END
