// normal multiply function
const multiply = (x, y) => x * y;

// curried multiply function
const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(5, 10)); // output: 50
console.log(curriedMultiply(5)(10)); // output: 50

// Partially applied functions are common use of currying
const timesTen = curriedMultiply(10);

console.log(timesTen(5)); // output: 50
