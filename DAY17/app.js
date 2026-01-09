let userInput; 
let result = document.querySelector('.resultContainer');

document.querySelector('.button').onclick = ()=>{
    userInput = document.querySelector('#inputText').value;
    reversedInput();
    
}

function reversedInput(){
    let reverseInput = "";
    let lastInputIndex = userInput.length - 1;

    while(lastInputIndex >= 0){
        reverseInput += userInput[lastInputIndex];
        result.innerHTML = reverseInput;
        lastInputIndex-- ;
    }
}
 