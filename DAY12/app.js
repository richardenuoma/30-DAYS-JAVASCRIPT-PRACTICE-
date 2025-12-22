let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

let randomNumber = Math.random();

let shouldWake = randomNumber >= 0.5;

btn.addEventListener('click', ()=>{
   result.innerHTML = shouldWake;
})