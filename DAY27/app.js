const birthdayDate = new Date(2005, 3, 17);
// console.log(birthdayDate);


const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getTime());

// const date = new Date(1963,7,17);

function dateFormatter(d){
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    if(month < 10) {month = "0" + month};
    let date = d.getDate();
    if(day < 10) {date = "0" + date}
    return `${year}-${month}-${date}`
}
// console.log(dateFormatter(date));

let newDate = new Date();
// console.log(newDate.toLocaleDateString("en-US"));
// console.log(newDate.toLocaleDateString("fr-CA"));

const options = {month: "short", weekday: "long", year: "numeric"};
// console.log(newDate.toLocaleDateString("en-US", options));
let millenium = new Date(2000, 0, 1);
let anotherMillenium = new Date(946684800000);
let moment = Date.now();
let differenceInMs = moment - millenium;
// console.log(differenceInMs)
// console.log(millenium);
// console.log(anotherMillenium)
// console.log(moment);

function differenceInDays(startDate, endDate){
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    const diffInMilliseconds = Math.abs(endDate - startDate);

    const diffInDays = diffInMilliseconds / millisecondsPerDay;

    return diffInDays;
}

const startDate = new Date(2024, 3, 12);
const endDate = new Date(2024, 6, 31);

console.log(differenceInDays(startDate,endDate));