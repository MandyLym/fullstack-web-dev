let x = 500

console.log(x===7);

// == Checks for value only
// === Checks for value and data type

// >, < Larger than, smaller than
//>=, <= Larger than or equal to, smaller than or equal to

//OPERATORS

//COMPARISON OPERATORS

if(x>5){
    console.log("x is larger than 5");
}
else{
    console.log("x is not larger than 5");
}


if(x>700){
    console.log("x is larger than 700");
}
else if (x >400){
    console.log("x is smaller than 700 but larger than 400");
}
else{
    console.log("x is smaller than 400)");
}

//LOGIC GATES

//&& AND gate (both conditions must be true)
// || OR gate (at least one condition must be true)
//! NOT (negates the condition, true becomes false, false becomes true)


//&&
age = 10
weight = 70

if(age<15 && weight>50){
    console.log("Overweight for this age");
}else{
    console.log("Not overweight for this age");
}

// ||
let money = false
let VIP = false

if (money || VIP){
    console.log("Allowed Entry");
}else{
    console.log("Denied Entry");
}

// !
let y=5

if(y !=5){
    console.log("y is NOT equal to 5");
}else{
    console.log("y is equal to 5");
}

