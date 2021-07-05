(() => {
  "use strict";
  (function () {
    const e = document.querySelector(".goods");
    return fetch("./db/db.json")
      .then((e) => {
        if (e.ok) return e.json();
        throw new Error("Data don't receivet, error: " + e.status);
      })
      .then((e) => e)
      .catch((t) => {
        console.warn(t), (e.innerHTML = "<div>Upss  </div>");
      });
  })().then((e) => {
    !(function (e) {
      const t = document.querySelector(".goods");
      e.goods.forEach((e) => {
        const n = document.createElement("div");
        (n.className = "col-12 col-md-6 col-lg-4 col-xl-3"),
          (n.innerHTML = `\n                  <div class="card" data-category="${
            e.category
          }">\n                  ${
            e.sale ? "<div class='card-sale'>🔥Hot Sale🔥</div>" : ""
          }\n\n                    <div class="card-img-wrapper">\n                      <span class="card-img-top" style="\n                          background-image: url('${
            e.img
          }');\n                        "></span>\n                    </div>\n                    <div class="card-body justify-content-between">\n                      <div class="card-price">${
            e.price
          } ₽</div>\n                      <h5 class="card-title">\n                        ${
            e.title
          }\n                      </h5>\n                      <button class="btn btn-primary">В корзину</button>\n                    </div>\n                  </div>\n                `),
          t.appendChild(n);
      });
    })(e),
      (function () {
        const e = document.querySelectorAll(".goods .card"),
          t = document.querySelector(".catalog-button"),
          n = document.querySelector(".catalog-list"),
          c = document.querySelector(".catalog"),
          o = new Set();
        t.addEventListener("click", function (t) {
          c.style.display
            ? (c.style.display = "")
            : (c.style.display = "block"),
            "LI" === t.target.tagName &&
              e.forEach((e) => {
                e.dataset.category === t.target.textContent
                  ? (e.parentNode.style.display = "")
                  : (e.parentNode.style.display = "none");
              });
        }),
          e.forEach((e) => {
            o.add(e.dataset.category);
          }),
          o.forEach((e) => {
            const t = document.createElement("li");
            (t.textContent = e), n.appendChild(t), console.log(e);
          });
      })(),
      document.querySelectorAll(".filter-check_checkbox").forEach((e) => {
        e.addEventListener("change", function () {
          this.checked
            ? this.nextElementSibling.classList.add("checked")
            : this.nextElementSibling.classList.remove("checked");
        });
      }),
      (function () {
        const e = document.querySelectorAll(".goods .card"),
          t = document.querySelector("#discount-checkbox"),
          n = document.querySelector(".goods"),
          c = document.querySelector("#min"),
          o = document.querySelector("#max"),
          r = document.querySelector(".search-wrapper_input"),
          l = document.querySelector(".search-btn");
        function a(t) {
          const n = new RegExp(r.value.trim(), "i");
          e.forEach((e) => {
            const t = e.querySelector(".card-title");
            n.test(t.textContent)
              ? (e.parentNode.style.display = "")
              : (e.parentNode.style.display = "none");
          }),
            ("click" == event.type || "Enter" == event.key) && (r.value = "");
        }
        function d() {
          e.forEach((e) => {
            const r = e.querySelector(".card-price"),
              l = parseFloat(r.textContent),
              a = e.querySelector(".card-sale");
            (c.value && l < c.value) ||
            (o.value && l > o.value) ||
            (t.checked && !a)
              ? e.parentNode.remove()
              : n.appendChild(e.parentNode);
          });
        }
        t.addEventListener("click", d),
          c.addEventListener("change", d),
          o.addEventListener("change", d),
          r.addEventListener("keyup", a),
          l.addEventListener("click", a);
      })(),
      (function () {
        let e = document.querySelector("#cart"),
          t = document.querySelector(".cart"),
          n = document.querySelector(".cart-close");
        e.addEventListener("click", function () {
          (document.body.style.overflow = "hidden"), (t.style.display = "flex");
        }),
          n.addEventListener("click", function () {
            (t.style.display = "none"), (document.body.style.overflow = "");
          });
      })(),
      (function () {
        let e = document.querySelectorAll(".goods  .card"),
          t = document.querySelector(".cart-wrapper"),
          n = document.querySelector("#cart-empty"),
          c = document.querySelector(".counter");
        function o() {
          let e = t.querySelectorAll(".card");
          (c.textContent = e.length),
            0 !== e.length ? n.remove() : t.appendChild(n);
        }
        function r() {
          let e = t.querySelectorAll(".card-price"),
            n = document.querySelector(".cart-total span"),
            c = 0;
          e.forEach((e) => {
            c += parseFloat(e.innerHTML);
          }),
            (n.textContent = c);
        }
        e.forEach((e) => {
          e.querySelector("button").addEventListener("click", () => {
            let n = e.cloneNode(!0);
            t.appendChild(n), o(), r();
            const c = n.querySelector(".btn");
            (c.textContent = "Delete Item"),
              c.addEventListener("click", () => {
                n.remove(), o(), r();
              });
          });
        });
      })();
  });
})();
