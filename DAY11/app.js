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
    let randomDiceIndex = Math.floor(Math.random() * diceImage.length);
    let randomDice = diceImage[randomDiceIndex];

    dice.src = randomDice;
    console.log('Hello Dev!');
})