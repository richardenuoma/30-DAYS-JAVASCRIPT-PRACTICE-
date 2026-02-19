// Select digitInput, calculateBtn and totalTaxResult

let price = document.getElementById('digitInput');
 
let btn = document.querySelector(".calculateBtn").addEventListener('click', ()=>{
    vatCalculator(price.value);
});

let totalTaxResult = document.querySelector("#totalTaxResult");



function vatCalculator(price){
    const TAX_RATE = 0.20;
    let calculatedTax = TAX_RATE * price; 

    totalTaxResult.innerHTML = `${calculatedTax.toFixed(2)}GBP`;
}