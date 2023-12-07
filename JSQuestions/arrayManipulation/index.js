// Flatten and Remove Duplicates
// Flattening means converting a multidimensional or nested array into a one-dimensional array.

function flattenAndRemoveDuplicates(arr) {
  return [...new Set(arr.flat(Infinity))];
}

const arr = [1, 2, [3, 4, [5, 6]], 2, [3, 4]];
const result = flattenAndRemoveDuplicates(arr);
console.log(result);

// Remove Duplicates without flattening using filter method
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

const arr1 = [1, 2, 3, 4, 2, 3, 4];
const result1 = removeDuplicates(arr);
console.log(result); // Output: [1, 2, 3, 4]
