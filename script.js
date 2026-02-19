const i = document.getElementsByClassName("btn__principal")[0];
const x = document.getElementsByClassName("img__1")[0];
const carritoHTML = document.getElementsByClassName("carrito__html")[0];
const currentHash = window.location.hash;
const cards = document.querySelectorAll(".card__div");
const ulList = document.querySelector("#ul_list");
const li = document.createElement("li")

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
            console
          } else {
            cards[i].style.border = "none";
          }
        }
    });
});

cards.forEach(element_card => {
    element_card.addEventListener("click", () => {
        document.getElementsByClassName("p__textReutilizable")[0].style.display = "none";
        console.log(element_card.getAttribute("data-category"));
        const li = document.createElement("li")
        li.textContent = element_card.getAttribute("data-category");
        ulList.appendChild(li)
    });
});

