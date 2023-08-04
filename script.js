		
let checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('click', darkMode);

function darkMode(){
    document.body.style.backgroundColor='black'
    document.querySelector('.about').style.backgroundColor='black'
    document.querySelector('.skills').style.backgroundColor='black'
    document.querySelector('.cards-section').style.background='black'
    document.querySelector('.services').style.backgroundColor='black'
    document.querySelector('.contact').style.backgroundColor='black'
    document.querySelector('footer').style.backgroundColor='black'
    document.querySelector('.last').style.backgroundColor='black'
    document.body.style.color='white'
}

