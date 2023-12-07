// Deep cloning an object means creating a new object with the same structure and values as the original, but without sharing any references to nested objects or arrays.

function deepClone(obj) {
  var clonedObject = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObject[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return clonedObject;
}

const originalObject = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA',
  },
  hobbies: ['reading', 'coding'],
};

const clonedObject = deepClone(originalObject);

console.log(clonedObject);
