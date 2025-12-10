// Select HTML Elements
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let input = document.getElementById('input');

function celcuisConverter(farenheight){
    return 5 / 9 * (farenheight - 32);
}

btn.addEventListener('click', ()=>{
    let value = Math.round(parseFloat(input.value));
    let celcuis = celcuisConverter(value);
    result.textContent = `${celcuis}℃`;
})