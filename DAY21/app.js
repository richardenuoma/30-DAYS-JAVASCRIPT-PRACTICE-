// Function Expression
// let greet = function(name){
//     console.log("Hello " , name);
// }
// greet("James");

// let greet = "Hello";
// This will throw and error!

// Assigning the functionality of greet to another function name.
// let anotherGreet = greet;
// anotherGreet('Andrew');

// Convert this function into an expression
// function square(number){
//     return number * number;
// }

// const square = function(number){
//     return number * number;
// }

// Function expression can not be hoisted it's only called after it has been declared :) "This will come in handy"

//CALL BACKS
// function greet(name, callback){
//     console.log("Hello " + name);
//     callback();
// }

// greet('John', function(){
//     console.log("Function call has ended");
// })

// let input1 = 6;
// let input2 = 2;

// let calculator = function(n1, n2, calculatorFunction){
//     console.log(calculatorFunction(n1,n2));
// }

// Addition
// calculator(input1,input2, function(n1,n2){
//     console.log(n1 + n2);
// })

// Subtraction
// calculator(input1,input2, function(n1,n2){
//     console.log(n1 - n2);
// })

// multiplication
// calculator(input1, input2, function(n1,n2){
//     console.log(n1 * n2);
// })


// // Declared function
// function square(num){
//     return num * num;
// }

// // Function expression
// let square = function(num){
//     return num * num
// }

// // Arrow Function
// let square = (num)=>{
//     return num * num
// }

// Palindrone

const palindrone = (word)=>{
    let isPalindrone = false
    let result = "";
    for(let i = word.length - 1 ; i >= 0; i--){
        // console.log(word[i])
        result += word[i];
    }

    if(word === result){
        isPalindrone = true;
        console.log(`${word} is a palindrone`)
    } else{
        console.log(`${word} is not a palindrone!`);
    }
}

palindrone('madam');