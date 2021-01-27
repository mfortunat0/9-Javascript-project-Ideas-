const img = document.querySelector("img")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const images = ["imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg"]

let count = 0

left.addEventListener("click", () => {
    console.log(img.attributes)

    if (count === 0) {
        img.src = images[2]
        count = 2
    }
    else {
        count--
        img.src = images[count]
    }
})

right.addEventListener("click", () => {
    console.log(img.attributes)

    if (count === 0) {
        img.src = images[2]
        count = 2
    }
    else {
        count--
        img.src = images[count]
    }
})

