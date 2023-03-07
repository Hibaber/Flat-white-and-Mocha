
const rating = document.querySelectorAll(".rating")
console.log(rating)
rating.forEach((elem) => {
    const rating = elem.dataset.rating

    console.log(rating)
    switch (rating) {

        case "1":
            elem.innerHTML = `⭐`

            break

        case "2":
            elem.innerHTML = `⭐⭐`
            break

        case "3":
            elem.innerHTML = `⭐⭐⭐`

            break

        case "4":
            elem.innerHTML = `⭐⭐⭐⭐`

            break

        case "5":
            elem.innerHTML = `⭐⭐⭐⭐⭐`

            break

    }






})
