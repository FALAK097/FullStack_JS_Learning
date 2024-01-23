// 1. Using Spread Operator
const originalArray = [1, 2, [3, 4]];

// Shallow copy using spread operator
const shallowCopy = [...originalArray];

// Modify the nested array in the shallow copy
shallowCopy[2][0] = 99;

console.log(originalArray); // [1, 2, [99, 4]]
console.log(shallowCopy); // [1, 2, [99, 4]]

// 2. Using Object.assign() for Objects:
const originalObject = { a: 1, b: { c: 2 } };

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, originalObject);

// Modify the nested object in the shallow copy
shallowCopy.b.c = 99;

console.log(originalObject); // { a: 1, b: { c: 99 } }
console.log(shallowCopy); // { a: 1, b: { c: 99 } }
