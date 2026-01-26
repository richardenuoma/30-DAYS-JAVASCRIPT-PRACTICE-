// OBJECTS
// Grouping Data 
// Using Variables we to group arrays are slighty complex and sometimes needs to be minimized so we used arrays to replace variables now we're going to use Objects. 

// example of variables storing data 
let fruit1 = "Apple"; 
let fruit2 = "Pear";
let fruit3 = "Orange";

// example of array storing data 
// let fruits = ["Apple", "Pear", "Orange"];
// This way we accessed them through their index number 0,1,2,3 

// Multiple Type Arrays
// let myCar = ["Red", 5, 3500, ["Tony", "Angela"]];

// console.log("The colour of my car is: " + myCar[0])

let myCar = {
    color: "Red",
    mileage: 3500,
    seats: 5,
    owner: ["Tony", "Angela"]
}

// console.log("The color of my car is: " + myCar.color);


let myObjectName = {
    property1Name: "property 1",
    property2Name: "property 2",
}

//Appalachian Trail 
let trail = {
    name: "Appalachian Taril",
    length: 2197,
    location: "Appalachain Mountains",
    highestPoint : 6643,
    lowestPoint: 124
}

// console.log(trail);

// Accessing Objects
let mainCharacter = {
    name: "Harry",
    age: 11,
    friends: ["Hermione", "Ron"]
}

// console.log(mainCharacter.name);
// console.log(mainCharacter["name"])

// Changing Property Values 

let fruits = {
    apples: 5,
    pears: 3
}
// Adding a new property name and value 
// fruits.apples = 6;
fruits.orange = 7;

// Deleting a property and it's value 
// delete fruits.apples;
// console.log(fruits);

// for(fruit in fruits){
//     console.log(`${fruit} ${fruits[fruit]}`);
// }
let fruitProperty = "pineapple";
let fruitDigits = "100";

for(fruit in fruits){
    delete fruits[fruit];
    fruits[fruitProperty] = Number(fruitDigits);
}

// console.log(fruits);

// JSON = JAVASCRIPT OBJECT NOTATION (DATA STRUCTURE)
// objects
let order1 = {
    number: 846344,
    items: [
        {name: "Screws", quantity: 40},
        {name: "Helmets", quantity: 4},
    ]
}

//json
// {
//   "name": "John",
//   "age": 30,
//   "isStudent": false,
//   "fruits": ["apple", "banana"],
//   "address": {
//     "street": "123 Main St"
//   }
// }

// console.log(order1)
// console.log(typeof order)

//Convert this JSON string into a JavaScript Object
// '{"id":1,"type":"general","setup":"Why don\'t scientists trust atoms?","punchline":"Because they make up everything!"}'

let info = {
    id: 1,
    type: "general",
    setup: "Why don\'t scientists trust atoms?",
    punchline: "Because they make up everything!"
}

// let infoAsJSON = JSON.stringify(info);
// console.log(infoAsJSON)

// let infoAsObject = JSON.parse(info);
// console.log(infoAsObject);

// console.log(info)


// const jokes = {
//         "id":1,
//         "type":"general",
//         "setup":"Why don\'t scientists trust atoms?","punchline":"Because they make up everything!"
// }

// console.log(JSON.stringify(jokes));
// console.log(JSON.parse(jokes));

// METHODS
// Methods are also function 
let person = {
    name: "Angela",
    // Methods example
    greetPeople: () => {return 'Hello everyone!'},

    leavePeople: function (){return 'Bye everyone!'},
    
    eatPeople(){return 'Rawrrrrr'},
}

let result = person.greetPeople();
let result2 = person.leavePeople();
let result3 = person.eatPeople();
console.log(result);
console.log(result2);
console.log(result3)