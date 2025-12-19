let cardDisplay = document.querySelector(".cardInfo");
let btn = document.querySelector(".btn");
let cardCounterDisplay = document.querySelector("#cardCounterDisplay");
let progressPercentDisplay = document.querySelector('.progressfill');
// Task 1
// Make the first task display on the card!

const flashcards = [
  "What are the two ways to write comments in Javascript?",
  "What is the difference between const, let and var?",
  "List all the primitive data types in Javascript",
  "How can you check the data type of something in javascript?",
  "What is the difference between double quotes, single quotes and backticks?",
  "What is a template literal?",
  "What happens if you add a number data type to a string data type?",

  "Explain the modulus operator",
];

// set the current card index to 0
let currentCardIndex = 0;

// 1. The code here is only activated when you click on the "Next" button in preview
btn.addEventListener('click', ()=>{
    // use the current card index to access the flashcards making it easier to also access the card display 

    let card = flashcards[currentCardIndex];

    cardDisplay.innerHTML =  card;

    //2. You have access to a variable called currentCardIndex, this start as 0. Use it to keep track of which ard is being displayed 
    
    cardCounterDisplay.innerHTML = `Card ${currentCardIndex + 1} of ${flashcards.length}`;



    // 3. Control the progress bar by setting it's width to a string that's 50%;

    //Step 1: Create a progress percentage with the card index and card length
    const progress = ((currentCardIndex + 1) / flashcards.length)* 100;

    progressPercentDisplay.style.width = `${progress}%`;

    
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;

    
});



