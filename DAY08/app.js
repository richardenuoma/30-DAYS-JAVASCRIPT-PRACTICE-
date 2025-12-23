let result = document.querySelector('.result');
let btn = document.querySelector('.btn');
let inputs = document.querySelectorAll('#scores');

let scoreArray = []

btn.addEventListener('click', ()=>{
    inputs.forEach((item)=>{
        let value = Number(item.value);
        scoreArray.push(value);
    })
    console.log(scoreArray)
    result.innerHTML = scoreArray[0] + scoreArray[1] + scoreArray[2];
})

