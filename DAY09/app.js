
//  DOG CALCULATOR
// One dog year is equivalent to seven human years. Use the inputs to write a message the console. It should have this format:

// A dog that is 2 years old in dog years is 14 years old in human years.
// Your code needs to calculate the value of dog years based on the value supplied in the inputs pane.

 
let input = document.querySelector('#dogAge');
let btn = document.querySelector('.btn');
let result = document.querySelector('.answer')


input.addEventListener('change', (e)=>{
    let age = [];
    let answer = e.target.value;
    age.push(answer);
    
    let dogAge = age[0];
    let dogAgeInHumanYear = dogAge * 7;

    result.innerHTML = `A dog that is ${dogAge} years old in dog years is ${dogAgeInHumanYear} years old in human years.`;
    
});

// Trust me, this wasn't so simple to think about, although i'm still yet to solve day 8 but let's stick with moving forward :) 
// Happy Coding!!!
