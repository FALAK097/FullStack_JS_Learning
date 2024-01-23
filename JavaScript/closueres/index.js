// global scope
let x = 1;

const parentFunction = () => {
  // local scope
  let myValue = 2;
  console.log(x);
  console.log(myValue);

  const childrenFunction = () => {
    console.log((x += 5));
    console.log((myValue += 2));
  };

  return childrenFunction;
};

const result = parentFunction();

result();

// Closure with IIFE (Immediately Invoked Funtional Expressions)

const privateCounter = (() => {
  let count = 0;
  console.log('initial count value: ' + count);

  return () => {
    console.log((count += 1));
  };
})();

// "()" at the end indicates an IIFE function.

privateCounter();

// Closure with IIFE (Immediately Invoked Funtional Expressions) and a parameter

const credits = ((num) => {
  let credits = num;
  console.log('initial credits value: ' + credits);
  return () => {
    credits -= 1;
    if (credits > 0) {
      console.log('continue playing game: ' + credits);
    }
    if (credits <= 0) {
      console.log('game over');
    }
  };
})(3);

credits();
credits();
credits();
