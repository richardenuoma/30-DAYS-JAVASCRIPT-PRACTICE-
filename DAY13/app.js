let userGuess = document.getElementById('input')
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

const computerScore = 50;

btn.addEventListener('click', ()=>{
    let value = userGuess.value;
    if(value == computerScore){
        result.innerHTML = `Congratulations! ${value} is the right number!`
    } else if(value < computerScore){
        result.innerHTML = `${value} is too low! Please try again!`
    } else if(value > computerScore){
        result.innerHTML = `${value} is too High! Please try again`
    } else {
        result.innerHTML = `Oops!`
    }
})

