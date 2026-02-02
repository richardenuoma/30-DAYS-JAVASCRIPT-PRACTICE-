let inputs = ["Delight", 1, 2,"Twi"];

function stringSplice(aString, startIndex, spliceLength, stringToInsert){
    let newWord =  aString.splice(0,1);
    let newInput = stringToInsert[aString.length];
    return (newInput.concat(newWord.slice(startIndex, spliceLength)))
}

// stringSplice(inputs[0], Number(inputs[1]), Number(inputs[2]));

let names = ["Jefferyyy", "James", "Thomas"] 
let max = 0; 
let longestString; 
for(let name of names){
    if(name.length > max){
        max = name.length;
        longestString = name;
    }
 
}

// console.log(longestString);

let userCommand = " open the door   ";
//Figure out a way to chop off the spaces at the beginning and end of the userCommand string.

// console.log("start->" + userCommand.slice(1,14) + "<-end");
// console.log("start->" + userCommand.trim() + "<-end");


// STRING.SPLIT & ARRAY.JOIN METHODS 
let newNames = "Angela, Ben, Tommy, Andrew";
// console.log(newNames.split(","));

let newFruits = ["Apple", "Banana", "Pineapple"];
// console.log(newFruits.join(" "))


let sentence = "Is it crazy how saying sentences backwards";

function sentenceReverser(sentence){
    return sentence.split(" ").reverse().join(" ");
}
 
function capitalizeSentence(sentence){
    return sentence.tittleCase();
}

// console.log(capitalizeSentence(sentence))

let test = "james brown";
function titleCaseSentence(words){
    let capitalizedWordArray = []
    let splitWords = words.split(" ");

    for( word of splitWords){
        let firstWord = word[0].toUpperCase();
        let capitalisedWord = firstWord + word.slice(1).toLowerCase();
        capitalizedWordArray.push(capitalisedWord);
    }
    return capitalizedWordArray.join(" ");
}


console.log(titleCaseSentence(test));