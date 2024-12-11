const tittle = document.getElementById('tittle')
const content = document.getElementById('content')
const newText = document.getElementById('newText')
const background = document.getElementById('background')
const kub = document.getElementById('kub')
const data = document.getElementById('data')
const reset = document.getElementById('reset')
const body = document.getElementById('body')
const divText = document.getElementById('divText')
const dataText = document.getElementById('dataText')

newText.addEventListener('click', () => {
    tittle.textContent = "New web page"
    content.textContent = "Java Script"
})

background.addEventListener('click', () => {
    body.style.background = "yellow"
})

kub.addEventListener('mouseenter', () => {
    divText.style.color = "white"
    kub.style.background = "black"
    kub.style.scale = "1.2"
})
kub.addEventListener('mouseleave', () => {
    divText.style.color = "black"
    kub.style.background = "white"
        kub.style.scale = "1.0"
})

data.addEventListener("click", () => {
    dataText.textContent = "11.12.2024  at 21:34"
})

reset.addEventListener("click", () => {
    body.style.color = "white"
    dataText.textContent = ""
})
