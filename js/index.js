// Your code goes here

const navBar = document.querySelector('.nav')
console.log(navBar)

navBar.addEventListener('mouseover', (event) =>{
    event.target.style.color = 'purple'
    event.target.style.border = '5px solid gold'
})

navBar.addEventListener('mouseleave', (event) =>{
    event.target.textContent = "*poof* I've got you now!";
    event.target.style.width = '70%';
    event.target.style.fontSize = '4rem';
    event.target.style.textAlign = 'center';
    event.target.style.color = 'purple'
    event.target.style.border = '5px solid gold'
})

const heading1 = document.querySelector('.logo-heading')

document.addEventListener('keydown', (item) =>{
    if(item.key === 'Escape'){
        heading1.textContent = "Welcome - Please don't go!"
        heading1.style.marginTop = "1.5%"
        heading1.style.fontSize = '4rem'
        heading1.style.color = 'orange'
    }
})


let img1 = document.querySelector('img')
img1.addEventListener('mouseenter', event => {
    img1.src = "https://github.com/huisingaS/DOM-II/blob/main/img/vwbus.jpg?raw=true"
})

img1.addEventListener('mouseleave', event => {
    img1.src = "https://github.com/huisingaS//DOM-II/blob/main/img/fun-bus.jpg?raw=true"
})

img.addEventListener('drag', event => {
    img.src = "https://github.com/huisingaS//DOM-II/blob/main/img/plane.png?raw=true"
})

let img2 = document.querySelector('.img-content')
img2.addEventListener('mouseenter', event => {
    img2.style.transform = "scale(1.2)"
    img2.style.transition = "all 0.3s"
  })

  img2.addEventListener('mouseleave', event => {
    img2.style.transform = "scale(1.0)"
  })