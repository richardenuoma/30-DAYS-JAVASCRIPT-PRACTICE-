// SCOPES
// LOCAL VS GLOBAL SCOPE
// Code that are accessible anywhere within our code are called Global Scope

// Anything that's inside a set of curly braces is only accessible inside that particular block which is called Local Scope 

// Local Variabes override globals inside a block 
// e.g. 
// let a = 3;
// function doSomething(a){
// console.log(a)}
// doSomething(5);

// HOISTING
// Using a function before being created e.g. 

let width = 2;
let height = 3;

let rectangle = "";
for(let y = 0; y < width; y++){
    let currentRow = "";
    for(let x = 0; x < height; x++){
        currentRow += "X"
        console.log(currentRow);
    }
    rectangle += currentRow + "\n";

}

return rectangle
