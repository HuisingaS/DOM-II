// Your code goes here

const heading1 = document.querySelector('.logo-heading');
document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape'){
        heading1.textContent = "Welcome - Please don't go!"
        heading1.style.marginTop = "1.5%"
        heading1.style.fontSize = '4rem'
        heading1.style.color = 'orange'
    }
})

document.addEventListener('keyup', function(event) {
    if(event.key === 'Escape'){
        heading1.textContent = "I'm begging you :("
        heading1.style.marginTop = "1.5%"
        heading1.style.fontSize = '4rem'
        heading1.style.color = 'orange'
    }
})

let img1 = document.querySelector('img')
img1.addEventListener('mouseenter', function() {
    img1.src = "https://di-uploads-pod13.dealerinspire.com/stohlmanvolkswagen/uploads/2019/07/VWbus.jpg"
})

img1.addEventListener('mouseleave', function() {
    img1.src = "https://kleinmanenergy.upenn.edu/sites/default/files/styles/new_hero/public/policythumbs/747takeoff.png?itok=ntyL_dnV"
})

img1.addEventListener('drag', function() {
    img1.src = "https://cdn.cnn.com/cnnnext/dam/assets/130707184658-52-san-francisco-plane-crash-horizontal-large-gallery.jpg"
})

const navBar = document.querySelector('.nav')
navBar.addEventListener('dblclick', function(event) {
    event.target.style.color = 'purple'
    event.target.style.border = '5px solid gold'
})

document.addEventListener('contextmenu', (function(event) {
    event.target.style.background = 'black'
}))

const h4MouseMove = document.querySelector('h2')
h4MouseMove.addEventListener('mousemove', function() {
    h4MouseMove.style.fontSize = '7rem'
})

const button = document.querySelector('.btn')
button.addEventListener('click', function(event) {
    event.target.style.color = 'grey'
    event.target.style.background = "gold"
})

const footer = document.querySelector('footer')
footer.addEventListener('mousedown', function(event) {
    event.target.style.background = "gold"
    event.target.style.color = "purple"
    event.target.style.border = "5px solid black"
})

const propogation = document.querySelectorAll('img')
propogation[0].addEventListener('mousedown', function(event) {
    propogation[0].style.border = '10px solid black'
    event.stopPropagation();
})

$('nav a').click(function (event) {
    event.preventDefault();
});
