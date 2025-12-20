let dice = document.querySelector('#dice');
let btn = document.querySelector('#btn');

let diceImage = [
    'images/1.png',
    'images/2.png', 
    'images/3.png', 
    'images/4.png', 
    'images/5.png', 
    'images/6.png'
];


btn.addEventListener('click', ()=>{
    // it's kinda hard to explain this part but let me try... 
    // Step 1: i created the randomIndex variable which i stored the random Number that was floored into a whole number and multiplied it with the length of dice image array 

    // Which we know (i know you know it!) to be 5. Yeah 5
    // you can start at index 0 up to 5 that's 6 

    
    let randomDiceIndex = Math.floor(Math.random() * diceImage.length);

    // then i created a randomDice variable and set the diceImage with the randomDiceIndex which will result to a random number. 

    let randomDice = diceImage[randomDiceIndex];

    // Trust me, this part got me the hell stressed but it's a real life problem, ofc i had to do my research on this! 

    // So here's what i did, i target the src (source) attribute which we can see in the index.html file of the image element. and changed it to randomDice which we know contains the diceImage and randomDiceIndex(randomPositions) in the array

    dice.src = randomDice;
    
    // Opps! This console was just to test if my event listener was working! 
    
    console.log('Hello Dev!');

    // Thank you :) 
})