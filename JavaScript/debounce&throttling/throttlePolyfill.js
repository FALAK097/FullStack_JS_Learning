// Q.4 Implement Throttle Polyfill

const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_counter');

var pressedCount = 0;
var triggeredCount = 0;

const myThrottle = (cb, d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const throttledCount = myThrottle(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener('click', () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
