// Store contents in variables for easy access using queryselector
let answer1 = document.querySelector(".question1");
let answer2 = document.querySelector(".question2");
let button = document.querySelector(".namegenerator");
let heroname = document.querySelector(".heroname");

// Create a function to handle events 
function handleChange(){

    // Create event listeners to listen to changes 
    answer1.addEventListener('change', (e)=>{
        result1 = e.target.value;
        return result1;
    });

    answer2.addEventListener('change', (e)=>{
        result2 = e.target.value;
        return result2;
    });

    // Use the button element to add changes to h1
    button.addEventListener('click', ()=>{
        heroname.textContent = `YOUR HERO NAME IS ${result1 + result2}`;
        console.log(result1 + result2);
    });

}

 
handleChange();