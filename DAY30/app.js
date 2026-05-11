//*** HIGHER ORDER FUNCTION 
// 1. A function that takes another function as an argument is higher order function e.g. setTimeut(fn,time);

// 2. A function that returns a function as output 
        // function multiply(x){
            // return function(y){
                // return x + y;
// }} */

// function addOne(x){
//     return x + 1;
// }

// function doTwice(func, x){
//     return func(func(x));
// }

// console.log(doTwice(addOne,20));

// Maps
// Maps are non mutating arrays, but they expect a function and it's that function that it's going to use to transform each of the items in the array and output the new items in the arays 

// Maps give us access to three parameters 

//*** 
// const newArray = array.map(fn(item,index,array));

//  */
 
// const arrays = ["John", "Jane", "Bob"];
// let result = [];

// const userObject = arrays.map((name,index)=>({
//     id: index,
//     name: name
// }))

// console.log(userObject);

// Filter 
// const numbers = [1,2,3,4,5,6];
// const evenNumbers = numbers.filter((num) => num % 2 === 0); 
// console.log(evenNumbers);

// Reduce 
// Reduce accumulates value and instead of return arrays it returns the total value 

// const numbers = [1,2,3,4];
// const sum = numbers.reduce((acc,num)=>{return acc * num});
// console.log(sum);

// For Loop summing >>>
// let total = 0;
// for(let number of numbers){
//     total += number
// }
// console.log(total);


//  const people = [{
//     "name": "Alice", "age": 25,
//      "name": "Bob", "age": 30 ,
//      "name": "Charlie", "age": 35 
//  }];

// let finalResult = people.reduce((acc,item,index,array)=>{
//     if(item.age < 30){
//         acc["underThirty"].push(item.name);
//     }else{
//         acc["thirtyAndOver"].push(item.name);
//     }
//     return acc;
// }, {
//     underThirty: [],
//     thirtyAndOver:[]
// })

// console.log(finalResult);

const numbers = [1,2,3,4,5,6,7,8];
const evenNumbers = numbers.filter((num)=> num % 2 === 0)
console.log(evenNumbers)

const greaterThanThree = numbers.filter((num)=> num > 3);
console.log(greaterThanThree);

const names = ["Alice", "Bob", "Charlie", "Dave"];

const filteredName = names.filter((item, index, array)=>{return item.length >= 5})
console.log(filteredName)

const index = [2,5,6,7,8]; 
const sum = index.reduce((acc,num)=> acc + num, 0);
console.log(sum);

const newEmployees = [{
    name: "Alice", age: 25,
    name: "James", age: 30,
    name: "Charlie", age: 35
}];

const filteredEmployees = newEmployees.reduce((acc,individuals)=>{
    if(individuals.age <= 29){
        acc["underThirty"].push(individuals.name);
    }else{
        acc["thirtyAndAbove"].push(individuals.name);
    }
    return acc;
},{
    underThirty: [],
    thirtyAndAbove: []
})

console.log(filteredEmployees);

// Using map, filter, reduce together 

const ints = [1,2,3,4,5,6];
const result = numbers
.filter((num)=> num % 2 === 0)
.map((num)=> num * 2)
.reduce((acc,num)=> acc + num, 0);
console.log(result);

const products = [
    {name: "Phone", price: 699},
    {name: "Laptop", price: 999}, 
    {name: "Pen", price: 2},
    {name: "Shoes", price: 97},
    {name: "Gum", price: 1}
];

function calculateExpensivePrice(billArray){
    const result = billArray
    .filter((bill)=> bill.price >= 20)
    .map((bill)=> bill.price)
    .reduce((acc,bill)=> acc + bill, 0);

    return `The total is $${result}`;
}

console.log(calculateExpensivePrice(products))
