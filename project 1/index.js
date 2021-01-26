const time = document.querySelectorAll("h1")[0]

setInterval(() => {
    const date = new Date()
    const hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    const minute = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    const second = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
    time.innerHTML = `${hour}:${minute}:${second}`
}, 1000);