// SWITCH STATEMENT

// MULTIPLE IF'S 
// let day = "Tuesday";

// if (day === "Monday") {
//     console.log("Go to work");
// } else if (day === "Tuesday") {
//     console.log("Visit library");
// } else if (day === "Wednesday") {
//     console.log("Go to the gym");
// } else if (day === "Thursday") {
//     console.log("Work from home");
// } else if (day === "Friday") {
//     console.log("Movie night");
// } else if (day === "Saturday") {
//     console.log("Do laundry");
// } else if (day === "Sunday") {
//   console.log("Relax at home");
// }

// Pretty repetitive code so clever programmer came up with the switch statment

// Basic Switch Statement 
// switch(variable){
//     case value1:
//         Do something when variable = value1;
//          break;
//      case value2:
//          Do something when variable = value2;
//          break;
// }

// Exercise 1
// switch(day){
//     case "Monday":
//         console.log("Go to work");
//         break;
//     case "Tuesday":
//         console.log("Visit library");
//         break;
//     case "Wednesday":
//         console.log("Go the the gym");
//         break;
//     case "Thursday":
//         console.log("Work from home");
//         break;
//     case "Friday":
//         console.log("Movie night");
//         break;
//     case "Saturday":
//         console.log("Do laundry");
//         break;
//     case "Sunday":
//         console.log("Relax at home");
//         break;
//     default:
//         console.log("Invalid day!");
// }

// // Exercise 2
// let customerStarRating = 1;

// if (customerStarRating === 1) {
//   console.log("How can we improve?");
// } else if (customerStarRating === 2) {
//   console.log("Thanks, what did you enjoy about your experience?");
// } else if (customerStarRating === 3) {
//   console.log("Thanks, we'd love to know how we can do better!");
// } else if (customerStarRating === 4) {
//   console.log("Thanks for your rating, please let us know if you have any feedback.");
// } else if (customerStarRating === 5) {
//   console.log("Yay! Thanks so much! Hope to see you again soon!");
// }

// switch(customerStarRating){
//     case 1:
//         console.log("How can we improve?");
//         break;
//     case 2:
//         console.log("Thanks, what did you enjoy about your experiene?");
//         break;
//     case 3:
//         console.log("Thanks we'd love to know how we can do better!");
//         break;
//     case 4:
//         console.log("Thanks for your rating, please let us know if you have any feedback.");
//         break;
//     case 5:
//         console.log("Yay! Thanks so much! Hope to see you again soon!");
// }

// Exercise 3
// A catch all case 

// let age = 10;

// switch (age){
//     case 1:
//         console.log("Free Entry");
//         break;
//     case 2:
//         console.log("Half price");
//         break;
//     default:
//         console.log('Full price');
// }

// Exercise 4
let userInput = "no";

// if (userInput === "YES" || userInput === "Yes" || userInput === "yes") {
//   console.log("Let's start the game!");
// } else if (userInput === "NO" || userInput === "No" || userInput === "no") {
//   console.log("Game over.");
// } else {
//   console.log("I don't understand your input.")
// }

// switch(userInput){
//     case "YES":
//     case "Yes":
//     case "yes":
//         console.log("Let's start the game!");
//         break;
//     case "NO":
//     case "No":
//     case "no":
//         console.log("Game over.");
//         break;
//     default:
//         console.log("I don't understand your input")
// }

let inputs = ["3","x","3"];

inputs.forEach((input)=>{
    console.log(input);
})

 let num1 = Number (inputs[0]);
 let num2 = Number (inputs[2]);
 let operator = inputs[1].trim();


 switch(operator){
    case "+": 
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
    case "x":
        console.log(num1 * num2);
        break
    case "/":
        console.log(num1 / num2)
        break;
    default:
        prompt("Invalid operator!");
        break;

 }

 
 

 