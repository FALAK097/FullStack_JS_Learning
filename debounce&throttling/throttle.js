// Q.2 - Create a UI button and throttle as follows ->
//       --> Show "Button Pressed <X> Times" every time button is pressed
//       --> Increase "Triggered <Y> Times" count after 800ms of throttle

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_counter');

var pressedCount = 0;
var triggeredCount = 0;

const throttledCount = _.throttle(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
