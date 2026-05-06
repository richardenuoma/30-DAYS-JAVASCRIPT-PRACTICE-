const countDown = setInterval(()=>{
let now = new Date()
let birthday = new Date(2026,3,19);

let timeDiff = birthday.getTime() - now.getTime();
console.log(timeDiff);

let timeFormula = 1000 * 60 * 60 * 24 

let days = Math.floor(timeDiff/timeFormula);
console.log(days)
 
let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);

let minute = Math.floor((timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60)));
console.log(minute);

let seconds = Math.floor((timeDiff % (1000 * 60 * 60 * 24) / 1000));
console.log(seconds);

console.log(`${days} Days, ${hours} Hour, ${minute} Minute, ${seconds} Seconds`)

let dayInput = document.querySelector('.day').innerHTML = days;

let hourInput = document.querySelector('.hour').innerHTML = hours;

let minuteInput = document.querySelector('.minute').innerHTML = minute;

let secondsInput = document.querySelector('.ms').innerHTML = seconds;

if(dayInput === 0 && hourInput === 0 && minuteInput === 0 && secondsInput === 0){
    clearInterval(countDown)
    let heading = document.getElementsByTagName('h1').innerHTML = "Happy Birthday to Me 🎉🎂" ;
}
}, 1000)




