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
    cardWraper.appendChild(cardClone);

    showData();
    showPrice();

    const removeBtn = cardClone.querySelector(".btn");
    removeBtn.textContent = "Delete Item";
    removeBtn.addEventListener("click", () => {
      cardClone.remove();
      showData();
      showPrice();
    });
  });
});

function showData() {
  let cardCarts = cardWraper.querySelectorAll(".card");
  counter.textContent = cardCarts.length;

  if (cardCarts.length !== 0) {
    cardEmpty.remove();
  } else {
    cardWraper.appendChild(cardEmpty);
  }
}

function showPrice() {
  let priceSum = cardWraper.querySelectorAll(".card-price");
  let cartTotal = document.querySelector(".cart-total span");
  let sum = 0;

  priceSum.forEach((price) => {
    sum += parseFloat(price.innerHTML);
  });
  cartTotal.textContent = sum;
}
//Cart Items END
