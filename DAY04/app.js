// Select all inputs & button elements
let waistInput = document.getElementById('waist');
let weightInput = document.getElementById('weight');
let btn = document.querySelector(".btn");
let displayResult = document.querySelector('.show-result');
let result = document.querySelector(".result");

// Create an event listener to track changes on inputs
btn.addEventListener('click', ()=>{
    let waist = parseFloat(waistInput.value);
    let weight = parseFloat(weightInput.value);

    // access the bmi function 
    let bmi = calculateBMI(waist,weight);
    
    // return the bmi into the result content 
    result.textContent = `${bmi}%`;
})

// bmi function / formula! :) 
// This part of the code was helllll!!! 
function calculateBMI(waist,weight){
    return 1 / waist * (415 * weight - 9842) - 8.2;
}