"use strict";

//checkbox

let checkbox = document.querySelector("#discount-checkbox");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    this.nextElementSibling.classList.add("checked");
  } else {
    this.nextElementSibling.classList.remove("checked");
  }
});
//end checkbox
