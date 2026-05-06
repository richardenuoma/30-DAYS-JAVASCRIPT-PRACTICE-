// Default Parameters 
// function greetIfYouAreBadAtNames(name = "Andrew"){
//     console.log(`Hello ${name}`)
// }

// greetIfYouAreBadAtNames("James");
// greetIfYouAreBadAtNames();

// const inputs = [19.99, 15];
// function addTax(preTaxPrice, taxRate = 5){
//     let result = preTaxPrice + preTaxPrice * (taxRate/100);
//     return Number(parseFloat(result).toFixed(2));
// }


// console.log(addTax(inputs[0]));



// Optional Arguments 
// let now = new Date();
// now.toLocaleDateString('en-US');
// now.toLocaleDateString('en-US', {month: 'long'});


// Spread Operator 
// let abc = ["A", "B", "C"];
// let abcdef = [...abc, "D", "E", "F"];

// function example(...args){
//     let total = 0; 
//     for(num of args){
//         total += num;
//     }
//    console.log(total);
// }

// example(1,2,3,4)

// Recursive Functions 
// function sumTo1(n){
//     if(n === 1) return 1; 
//     return n + sumTo1(n - 1);
// }

// console.log(sumTo1(5))

function reverseString(string){
    if(string.length <= 1) return string; 
    return reverseString(string.slice(1) + string[0])
}

console.log(reverseString("Hello"));