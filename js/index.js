// Your code goes here

// 10 different types of event listeners
const nav1 = document.querySelector('nav a')
const nav2 = nav1.nextElementSibling
const nav3 = nav2.nextElementSibling
const nav4 = nav3.nextElementSibling
const firstH1 = document.querySelector('h1')
const firstH2 = document.querySelector('h2')
const secH2 = document.querySelector('.content-section .text-content h2')
const bobClick = document.querySelector('header div')
const alltheP =document.querySelectorAll('p')
const firstImage = document.querySelector('img')

nav1.addEventListener('click',(event) => {
    event.target.style.backgroundColor = 'yellow'
})
nav2.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red'
})
nav3.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'green'
})
nav4.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = 'cyan'
})
firstH1.addEventListener('mouseleave',(event) => {
    event.target.style.backgroundColor = 'orchid'
})
firstH2.addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'orange'
})
secH2.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'red'
})
bobClick.addEventListener('click', (event) => {
    event.target.style.border ='1px dashed purple'
})
alltheP.forEach(item => {
    item.addEventListener('auxclick',(event) => {
        event.target.style.backgroundColor = 'pink'
    })
})
window.addEventListener('resize', (event) => {
    firstImage.src = 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
})

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
    })
})
//checks
console.log(nav1)
console.log(nav2)
console.log(nav3)
console.log(nav4)
console.log(firstH1)
console.log(firstH2)
console.log(secH2)
console.log(bobClick)
console.log(alltheP)
console.log(firstImage)