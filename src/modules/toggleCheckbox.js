export default function toggleCheckbox() {
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
