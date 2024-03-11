// polyfill for map
Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// map function testing
let arr = [1, 2, 3, 4, 5];

const multiplyThree = arr.myMap((num, i, arr) => {
  return num * 3;
});

console.log(multiplyThree);

// polyfill for filter
Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

// filter function testing

const greaterThanTwo = arr.myFilter((num, i, arr) => {
  return num > 2;
});

console.log(greaterThanTwo);

// polyfill for reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

// reduce function testing
const sum = arr.myReduce((acc, num, i, arr) => {
  return acc + num;
}, 0);

console.log('The sum is: ', sum);

// map vs forEach

const arr2 = [1, 2, 3, 4, 5];

// map returns a new array and also allows chaining of functions like filter, reduce, etc.
const mapResult = arr2.map((num) => {
  return num + 2;
});

// forEach modifies the original array and does not return anything
arr2.forEach((num, i) => {
  arr2[i] = num + 2;
});

console.log(mapResult, arr2);
