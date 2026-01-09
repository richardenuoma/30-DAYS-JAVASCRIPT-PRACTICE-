// WHILE LOOP
// while(this condition is true){
// repeat this code
// }

// let turns = 5;
// while (turns > 0){
//     console.log("I will not waste my life writing this code");
//     turns = turns - 1;
// }

// DO WHILE LOOP
// let numberofBear = 99;
// do{
//     console.log(`${numberofBear} bottles of beer on the wall, ${numberofBear} bottles of beer`);
//     numberofBear = numberofBear - 1;
//     console.log(`Take one down and pass it around, ${numberofBear} bottles of beer on the wall`)
// }while(numberofBear > 0);

let inputText = "Angela";
let reversedInput = "";
let lastInputIndex = inputText.length - 1;

while(lastInputIndex >= 0){
    reversedInput += inputText[lastInputIndex];
    lastInputIndex --;
}

console.log(reversedInput);