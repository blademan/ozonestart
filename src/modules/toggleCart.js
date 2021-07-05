export default function toggleCart() {
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
