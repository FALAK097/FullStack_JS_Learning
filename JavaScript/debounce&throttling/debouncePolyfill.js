// Q.3 Implement Debounce Polyfill
// Polyfill meaning?
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_counter');

var pressedCount = 0;
var triggeredCount = 0;

// cb is callback & d is delay
const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debouncedCount = myDebounce(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
