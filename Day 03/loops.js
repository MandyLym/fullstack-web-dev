// Loops mean you keep doing something until a condition is met.

// for (let i=0; i <5; i++){
//     console.log(i);
// }

let x =0;

// while(x<6){
//     console.log(x);
//     // x=x+2
//     x += 2
// }

// do{
//     console.log(x);
//     x+=2
// }while(x<6)

// FOR EACH LOOP

let arrayofNumbers = [5, 6, 3, 8, 1, 9];

arrayofNumbers.forEach(function(currentValue, index, array){
    console.log(currentValue)
    // console.log(index)
});