const my2DArray = [
    ["X0", "X1", "X2"],
    ["Y0", "Y1", "Y2"],
    ["Z0", "Z1", "Z2"]
]

// Getting an array in an array in an array
// console.log(my2DArray[1]);

// getting an item in an arrays array;

// console.log(my2DArray[0][0]);

// my2DArray[1][1] = "Q";
// console.log(my2DArray[1])

const WORDS = [
    ["G","O","O","D"],
    ["B","O","O","M"],
    ["M","O","O","D"]
]

console.log(WORDS);

let row = WORDS[0]
console.log(row);

let result = "";
for(let r of row){
    result += r
}
console.log(result);