// CLASSES 
// Classes are methods of creating a blueprint so we can access things on the blueprints instead of creating them over and over again.

/** 
class ClassName{
    constructor(parameter1, parameter2){
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }
} 
**/

class Person{
    constructor(name, age, courseOfStudy){
        this.name = name;
        this.age = age;
        this.courseOfStudy = courseOfStudy;
    }
    
    breathe(){
        console.log('Inhaled, Exhaled')
    }

    greeting(){
        console.log(`Good Morning, ${this.name}`)
    }
}

let person1 = new Person("John", 29, "Computer Science");
 
// let person2 = new Person("Andrew", 33, "Philosophy");
// console.log(person2);

person1.greeting();

class Todo{
    #isComplete = false
    constructor(text){
        this.text = text;
    }

    toggleComplete(){
        this.isComplete = !this.isComplete;
    }
}

let todo = new Todo("Buy Mango", false);

todo.toggleComplete();
console.log(todo);
