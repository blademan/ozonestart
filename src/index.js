"use strict";

//!checkbox
function toggleCheckbox() {
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
}
toggleCheckbox();
// * checkbox END

//! Cart
function toggleCart() {
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
}

toggleCart();

//* Cart END

// !Add Items To The Cart
function addCardItem() {
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
}

addCardItem();
// * Add Items To The Cart

// ! Sale Filters
function actionPage() {
  const cards = document.querySelectorAll(".goods .card"),
    discountCheckbox = document.querySelector("#discount-checkbox"),
    goods = document.querySelector(".goods"),
    min = document.querySelector("#min"),
    max = document.querySelector("#max"),
    search = document.querySelector(".search-wrapper_input"),
    searchBtn = document.querySelector(".search-btn");

  discountCheckbox.addEventListener("click", filters);
  min.addEventListener("change", filters);
  max.addEventListener("change", filters);
  search.addEventListener("keyup", searchBarFilter);
  searchBtn.addEventListener("click", searchBarFilter);

  // * Search Bar Filter
  function searchBarFilter(e) {
    const searchText = new RegExp(search.value.trim(), "i");
    cards.forEach((card) => {
      const title = card.querySelector(".card-title");
      if (!searchText.test(title.textContent)) {
        card.parentNode.style.display = "none";
      } else {
        card.parentNode.style.display = "";
      }
    });

    if (event.type == "click") {
      search.value = "";
    } else if (event.key == "Enter") {
      search.value = "";
    }
  }
  // * Search Bar Filter END

  // * Filters (Sale Price)
  function filters() {
    cards.forEach((card) => {
      const cardPrice = card.querySelector(".card-price");
      const price = parseFloat(cardPrice.textContent);
      const discount = card.querySelector(".card-sale");

      if (
        (min.value && price < min.value) ||
        (max.value && price > max.value)
      ) {
        card.parentNode.remove();
      } else if (discountCheckbox.checked && !discount) {
        card.parentNode.remove();
      } else {
        goods.appendChild(card.parentNode);
      }
    });
  }
}
// * Filters (Sale Price) END
actionPage();
// * Sale Filters End

// ! Fetch DB
function getData() {
  fetch("../db/2db.json")
    .then((data) => {
      if (data.ok) {
        console.log(data);
      } else {
        throw new Error(data.status);
      }
    })
    .catch((err) => {
      console.warn(err);
    });
}
getData();
