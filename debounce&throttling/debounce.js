// Debouncing & Throttling in JS
// Q.1 - Create a UI button and debounce as follows ->
//       --> Show "Button Pressed <X> Times" every time button is pressed
//       --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_counter');

var pressedCount = 0;
var triggeredCount = 0;

// Use lodash library

const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
