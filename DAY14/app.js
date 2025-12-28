let container = document.querySelector('.options');
let computer = document.querySelector('.computer');
let resetBtn = document.querySelector('.resetBtn')
let resultMessage = document.querySelector('.result');

let emojiChoice = ["✊","✌️","🖐️"];
let random = Math.floor(Math.random() * emojiChoice.length);
let computerChoices = emojiChoice[random];

document.addEventListener('DOMContentLoaded', ()=>{

    emojiChoice.forEach((item)=>{
        let list = document.createElement('li');
        list.textContent = item;
        list.classList = "emojis";
        container.appendChild(list);
    });


    container.addEventListener('click', (e)=>{
        let playerChoice = e.target.innerHTML;
        console.log(playerChoice);
        console.log(computerChoices);
        
        let computerChoiceDisplay = document.createElement('h1');
        computerChoiceDisplay.textContent = computerChoices;
        computerChoiceDisplay.classList = "computerChoice";
        computer.appendChild(computerChoiceDisplay);
       
        
        if(playerChoice == computerChoices){
            resultMessage.innerHTML = "Draw🤝"
        }else if(
            (playerChoice ==="✊" && computerChoices === "🖐️") || 
            (playerChoice ==="🖐️" && computerChoices === "✌️") || 
            (playerChoice ==="✌️" && computerChoices === "✊") 
        ){
            resultMessage.innerHTML = "You Lost🥹"
        } else{
            resultMessage.innerHTML = "You Won🎉"
        }
    })

    resetBtn.addEventListener('click', ()=>{
        resetScreen();
        location.reload();
    })
  

})

// resetScreen clears result output on screens
function resetScreen(){
    computer.innerHTML = "";
    resultMessage.innerHTML = "";
}

