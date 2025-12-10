// Select HTML Elements
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let input = document.getElementById('input');

// Creating a function using farenheight as it's parameter
function celcuisConverter(farenheight){
    // celcuis formula 
    return 5 / 9 * (farenheight - 32);
}

// Using the event listner to get input and update result  
btn.addEventListener('click', ()=>{
    let value = Math.round(parseFloat(input.value));
    let celcuis = celcuisConverter(value);
    result.textContent = `${celcuis}℃`;
})