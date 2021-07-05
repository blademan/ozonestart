export default function actionPage() {
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
