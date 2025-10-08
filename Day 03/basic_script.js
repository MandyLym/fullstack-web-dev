var x = 5;
let y = 10;

console.log(x+y);

console.log("1"+"1");

const myName = "Mandy";

// myName = "John";

console.log("My name is " + myName);

console.log(x*x)

console.log(x + " times " + x + " is " + (5*5));

// BASICS

// DATA TYPES

//Integer (2 billion positive, 2 billion negative)
//Decimals (Double, float)
//Boolean (0, 1) (false, true)
//Strings (text enclosed in "quotes")

let distance = 5.5
let goThere = true

console.log (distance);
console.log (goThere);

console.log (typeof ("goThere"));

//NON-PRIMITIVE DATA TYPES
//Objects (represented by curly braces {})
//Arrays (represented by square brackets [])

//Arrays
let students=["Mandy", "John", "Sara"];
console.log(students[1])

//Objects
let myDetails = {
    "name" : "Mandy",
    "age" : 25,
    "State" : "Selangor",
    "Students" : students
}

console.log(myDetails.students[0]);

let details = [
    {
        "name" : "Mandy",
        "age" : 25,
        "State" : "Selangor",
    },
    {
        "name" : "John",
        "age" : 30,
        "State" : "Penang",
    },
    {
        "name" : "Sara",
        "age" : 28,
        "State" : "Kuala Lumpur",
    },
]

console.log(details);