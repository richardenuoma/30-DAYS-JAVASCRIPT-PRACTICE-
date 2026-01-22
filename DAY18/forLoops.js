// FOR LOOPS
// EVEN LESS TYPING 
// let n = 0;
// while(n < 100){
//     console.log('Hello');
//     n++;
// }
// While loop will create exactly 100 console logs

// for(let n = 0; n < 100; n++){
//     console.log('Hello');
// }
const LOWER_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomIndex = Math.floor(Math.random() * 27) ;
let randomLowerLetters = LOWER_LETTERS[randomIndex]
console.log(randomLowerLetters);

const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">","?", "/", "~"];
console.log(SYMBOLS.length);