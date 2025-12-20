// THE ARRAY
let  children = ["Jane", "Ben", "Tom"]  //Items
const tom = children[2];
console.log(tom);

const fibonacci = [0,1,1,2,3,4,8,13,21,34];
console.log(fibonacci);


const fruit = ["Apple", "Pear", "Orange"];
const lastFruit = fruit[3]; //Undefined 

console.log(lastFruit);

// Storing Numbers 
const scores = [234, 534, 34, 315];
let result = scores[0] + scores[1] + scores[2] + scores[3];
console.log(result);

// Modifying items in an array 
const grades = ["A", "B", "C", "A"];
grades[0] = "D";
console.log(grades);

// Task 
// Instruction 
// Using the array alphabet to change the lettersFromSchool from FAIL TO PASS

// Expected Output 
// P,A,S,S,

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lettersFromSchool = ["F", "A", "I", "L"];
lettersFromSchool[0] = alphabet[15];
lettersFromSchool[1] = alphabet[0];
lettersFromSchool[2] = alphabet[18];
lettersFromSchool[3] = alphabet[18];

console.log(lettersFromSchool);
