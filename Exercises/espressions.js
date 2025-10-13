let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

console.log("Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);
console.log("Not Equal (!=):", a != b);
console.log("Greater Than (>):", a > b);
console.log("Less Than (<):", a < b);

console.log("AND GATE:", a < b && a != b); // both conditions must be true
console.log("OR GATE:", a < b || a != b); // at least one condition must be true


console.log("Overridden Precedence:", (a + b) * (a - b)); // parentheses change the order of operations


