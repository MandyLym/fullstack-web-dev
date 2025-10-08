// Function is a reusable block of code that can be represent with a name

x=1

function addOne(){
    x +=1
}

addOne()
addOne()
addOne()
addOne()
addOne()

function addTwo(){
    x +=2
}

addTwo()
addTwo()

function convertXtoPounds(){
    x = x * 2.2
}

convertXtoPounds()

console.log(x)

//ARGUMENTS

let myHeight = 158
let friendHeight = 150

function cmToFeet(height){
    return height * 0.03
}

// console.log(cmToFeet(myHeight));
// console.log(cmToFeet(friendHeight));

myHeightInFeet = cmToFeet(myHeight);

console.log(myHeightInFeet);