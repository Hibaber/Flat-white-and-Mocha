document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("coffee-project JS imported successfully!");
  },
  false
);
// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header")
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open")
})


