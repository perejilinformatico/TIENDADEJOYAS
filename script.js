let i = document.getElementsByClassName("btn__principal")[0];
let currentHash = window.location.hash;

i.addEventListener("click", () => {
  window.location.hash = "#jsjs";
  setInterval(() => {
      window.location.hash = "";
  }, 1000);
});