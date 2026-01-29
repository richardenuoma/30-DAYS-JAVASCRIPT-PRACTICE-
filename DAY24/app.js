// ARRAY METHODS
// console.log(typeof([1,2,3,4]))

// ARRAYS ARE OBJECTS TOO
let normalArray = ["X", "Y", "Z"];
// console.log(typeof(normalArray));

let object = {
    0: "A",
    1: "B",
    2: "C"
}

// console.log(typeof(object));

// ASSIGNMENT 1
// Instructions
/** Behind the scenes, we have stored line 1 in the inputs area into a variable called array. You can check this by running the starting code. You can change the values in the array in the inputs area and the variable array will change.Use a for...in loop on the array to add 1 to each number in the array. So...

1 would become 2
2 would become 3
3 would become 4
Think of the array as an object and think about how you would do this to a JS object.
Expected Output
2,3,4 **/

// SOLUTION 
let array = [1,2,3];

for(input in array){
//     console.log(array[input] + 1);
}

// MUTABILITY 
const aString = "Hello, World!";
const aNumber = 123;
const aBoolean = true;

// These are primitive data type and as constant, they cannot be changed 
// But we can change any value in an object by accessing the index or property we want to change and effect the value; 

/** Instructions
Without typing the words "Egg" or "Chicken", can you switch the order of values in the whichCameFirst array.

So that Chicken comes before Egg in the array.

NOTE: Behind the scenes is the hidden code to create the array called whichCameFirst from the first line of the inputs area.

It's hidden so you can't change the array directly.

IMPORTANT: When we test your code, we will use different arrays to make sure that your code works for all 2-item arrays, not just the Egg, Chicken array. **/

let inputs = ["Eggs", "Chicken"];

// Switching Arrays
// First off we created a temporary variable to store one array, we then move forward to carrying the second value in the array and making it the firs value; then we target temporary variable and input it as the second value in the array!

let tempInput = inputs[0];
inputs[0] = inputs[1];
inputs[1] = tempInput;
// console.log(inputs);

// Creating a function to add array
/**The way i did this was to visualize the array as something not in a function, which in the function can be a bit confusing but outside the function is quite easy to understand what you're doing
 
So imagine you have an empty array and you can't visualize what lenght it will be in the future but you can get the length when the future eventually comes which is the (.length) function. i used that to the length of the array which is one of the parameter in the function, then i assigned the item variable which is the second parameter in the function 
**/

function addItem(array,item){
    return array[array.length] = item
}

addItem(inputs, "Duck");

// console.log(inputs);

// THE SPREAD OPERATOR
// The spread operator is helpful for us to spread out the items in an array and add new items to that array 
let numbers = [1,2,3,4,5,6];
// console.log(numbers);

let newNumber1 = numbers.push(7); //Mutating method
// console.log(newNumber1);

let newNumbers = numbers.concat(8);  //Non-mutating method
// console.log(newNumbers); 

// PUSH & POP
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
// console.log(fruits);

fruits.pop();
// console.log(fruits);

// CONCAT 