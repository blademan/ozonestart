export default function renderCatalog() {
  const cards = document.querySelectorAll(".goods .card");
  const catalogBtn = document.querySelector(".catalog-button");
  const catalogList = document.querySelector(".catalog-list");
  const catalogWraper = document.querySelector(".catalog");
  const categories = new Set();
  catalogBtn.addEventListener("click", showCategories);

  cards.forEach((card) => {
    categories.add(card.dataset.category);
  });

  categories.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    catalogList.appendChild(li);
    console.log(item);
  });

  function showCategories(e) {
    if (catalogWraper.style.display) {
      catalogWraper.style.display = "";
    } else {
      catalogWraper.style.display = "block";
    }
    if (e.target.tagName === "LI") {
      cards.forEach((item) => {
        if (item.dataset.category === e.target.textContent) {
          item.parentNode.style.display = "";
        } else {
          item.parentNode.style.display = "none";
        }
      });
    }
  }
}
