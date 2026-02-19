const i = document.getElementsByClassName("btn__principal")[0];
const x = document.getElementsByClassName("img__1")[0];
const carritoHTML = document.getElementsByClassName("carrito__html")[0];
const currentHash = window.location.hash;
const cards = document.querySelectorAll(".card__div");
const ulList = document.querySelector("#ul_list");
const btnAñadirCarrito = document.getElementsByClassName("visualizer__card")[0];
const p__textVisualizerCard = document.getElementsByClassName("p__textVisualizerCard")[0];
const li = document.createElement("li")
const btn__principalSali = document.getElementsByClassName("btn__principalSali")[0];
const btn__AñadirCarrito = document.querySelectorAll(".btn__AñadirCarrito");
const p__textReutilizable = document.querySelector(".p__textReutilizable")

i.addEventListener("click", () => {
  window.location.hash = "#jsjs";
  setInterval(() => {
      window.location.hash = "/index.html";
  }, 1000);
});

x.addEventListener("click", () => {
   if (carritoHTML.style.display === "none") {
    carritoHTML.style.display = "block";
   }
   else {
    carritoHTML.style.display = "none";
   }
});

cards.forEach(element => {
    element.addEventListener("click", () => {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i] === element) {
            cards[i].style.border = "2px solid var(--gold)";
            console.log(cards[i].getAttribute("data-category"));
            btnAñadirCarrito.style.display = "block";
            p__textVisualizerCard.textContent = cards[i].getAttribute("data-category")
          } else {
            cards[i].style.border = "none";
          }
        }
    });
});

btn__AñadirCarrito.forEach(element__btnañadir => {
    element__btnañadir.addEventListener("click", () => {
      btnAñadirCarrito.style.display = "none";
      const li = document.createElement("li");
      li.textContent = p__textVisualizerCard.textContent;
      ulList.appendChild(li);
      p__textReutilizable.style.display = "none";
    });
});

btn__principalSali.addEventListener("click", () => {
    btnAñadirCarrito.style.display = "none";
});