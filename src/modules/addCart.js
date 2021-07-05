export default function addCardItem() {
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
