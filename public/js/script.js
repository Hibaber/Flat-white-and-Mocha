document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log(" JS was imported successfully!");
  },
  false
)

const nav = document.querySelector("#nav")
const header = document.querySelector("#header")
const open = document.querySelector("#open")
const close = document.querySelector("#close")

open.addEventListener("click", () => {
  nav.classList.add("visible")
  header.classList.add("headerRes")
})

close.addEventListener("click", () => {
  nav.classList.remove("visible")
  header.classList.remove("headerRes")
})






