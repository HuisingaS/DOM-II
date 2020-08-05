// Your code goes here

const navBar = document.querySelector('.nav')
console.log(navBar)

navBar.addEventListener('mouseover', (navMouseClick) =>{
    navMouseClick.target.style.color = 'purple'
    navMouseClick.target.style.border = '5px solid gold'
})

navBar.addEventListener('mouseleave', (navMouseOut) =>{
    navMouseOut.target.textContent = "*poof* I've got you now!";
    navMouseOut.target.style.width = '70%';
    navMouseOut.target.style.fontSize = '5rem';
    navMouseOut.target.style.textAlign = 'center';
    navMouseOut.target.style.color = 'purple'
    navMouseOut.target.style.border = '5px solid gold'   
})

