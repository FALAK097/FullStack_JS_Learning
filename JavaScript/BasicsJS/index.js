// Regular Expressions in JavaScript
// What is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.
const regex = /very/g;
const str = 'This is a very very very nice string.';
console.log(str.replace(regex, 'VERY')); // This is a VERY VERY VERY nice string.

// Event Loop in JavaScript
// JavaScript is a single-threaded language. This means it has one call stack and one memory heap.
// As expected, it executes code in order and must finish executing a piece code before moving onto the next.
// JavaScript has functions that act asynchronously.
// An example is setTimeout(). It executes a block of code after a specified amount of time.
// This function does not go to the call stack immediately. Instead, it is registered in the Web API environment.
// The Web API environment is included in the JavaScript runtime environment.

// IIFE in JavaScript
// IIFE stands for Immediately Invoked Function Expression.
// It is a JavaScript function that runs as soon as it is defined.
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts.
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.
// IIFE is very useful because it does not pollute the global object, and it can be used to hide variables and functions.
// It is also used to create closures and hence can be used to create private variables.

// Callback in JavaScript
// A callback function is a function passed into another function as an argument.
// This function is invoked inside the outer function to complete an action.
// Callback functions are used every day in JavaScript, whether it is for DOM manipulation, making HTTP requests, or data analysis.

/*
function loadScript(src, callback) {
  let script = document.createElement('script'); // create a script tag
  script.src = src; // set the src attribute to the src argument
  script.onload = () => {
    console.log('Script loaded ' + src); // log the src argument
    callback(null, src); // call the callback function with null for the error argument and the src argument for the src argument
  };
  script.onerror = () => {
    console.log('Script load error.'); // log the error
    callback(new Error('Script load error.')); // call the callback function with an error object for the error argument
  };
  document.body.appendChild(script); // append the script tag to the body element
}

function hello(error, src) {
  // define a function that takes an error argument and a src argument
  if (error) {
    // if the error argument is truthy
    console.log(error); // log the error
    return; // return from the function
  }
  alert('Hello World!' + src); // alert the string 'Hello World!' concatenated with the src argument
}

loadScript(
  // call the loadScript function with two arguments
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js', // the first argument is a string
  hello // the second argument is a function
);
*/

// Promises in JavaScript
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      console.log('Script loaded ' + src);
      resolve(src);
    };

    script.onerror = () => {
      console.log('Script load error.');
      reject(new Error('Script load error.'));
    };

    document.body.appendChild(script);
  });
}

function hello(src) {
  alert('Hello World!' + src);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')
  .then((src) => {
    hello(src);
  })
  .catch((error) => {
    console.log(error);
  });

// Closure in JavaScript
// A closure is a function that has access to its outer function's scope even after the outer function has returned.
// This means a closure can remember and access variables and arguments of its outer function even after the function has finished.
// A closure is created when an inner function is returned from an outer function.

// Currying in JavaScript
// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.
// In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
