let result = document.querySelector('.result');
let btn = document.querySelector('.btn');
let inputs = document.querySelectorAll('input');

let scoreArray = [];


let scores = inputs.forEach((item)=>{
    item.addEventListener('onchange', (e)=>{
        console.log(e.target)
    })
})
