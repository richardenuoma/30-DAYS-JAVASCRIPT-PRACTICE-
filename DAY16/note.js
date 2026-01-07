// function wakeUp(){
//     console.log("Brush Teeth");
//     console.log("Wash Face");
//     console.log("Eat Breakfast");
// }

// wakeUp();

// Creating a function means declaring a function 

// Calling a function
// myFunction(argument1, argument2);

//Declaring a function
// function myFunction(parameter1, paremeter2){
//     console.log(parameter1 + parameter2);
// }

// Parameter is a name we give to the variable
// Argument is the value given to the variable

// Declaring a function
// function add(num1, num2){
//     console.log(num1 + num2);
// }
// Calling a function
// add(2,3);
// add(3,5); 

// Function declaration is the process of creating a new function by specifying it's name, parameters and code block, e.g. "function greet(name)"

//Parameters are variables listed in a function's declaration that act as placeholders for values, the function expects to receive e.g. name in "function greet(name)"

// Function body is the indented block of code that contains the functions instructions.


// Function call is the act of executing a function by using it's name followed by parentheses e.g. greet("Alice");


// Return key words

// Minimum Function
// function min (a,b){
//     if(a < b){
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }

// let num1 = 4;
// let num2 = 5;

// min(num1,num2);

// LEAP YEAR FUNCTION 
function isLeap(year){
    if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
        console.log('Leap Year');
    }else{
        console.log('Not Leap');
    }
}

isLeap(2100);
isLeap(2000);