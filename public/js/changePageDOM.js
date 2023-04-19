const page = document.querySelector("#page")
const previousPage = document.querySelector("#previousPage")
const nextPage = document.querySelector("#nextPage")


if (page.innerHTML > 0) {
    previousPage.onclick = () => {
        if (page.innerHTML > 1) {
            page.innerHTML = Number(page.innerHTML) - 1
            location.href = `/cafeterias?page=${page.innerHTML}`
        }
    }
    nextPage.onclick = () => {
        if (page.innerHTML < 3) {
            page.innerHTML = Number(page.innerHTML) + 1
            location.href = `/cafeterias?page=${page.innerHTML}`
        }
    }
}

