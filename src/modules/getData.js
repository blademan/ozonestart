export default function getData() {
  const goodsWrapper = document.querySelector(".goods");
  return fetch("./db/db.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Data don't receivet, error: ` + response.status);
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.warn(err);
      goodsWrapper.innerHTML = `<div>Upss  </div>`;
    });
}
