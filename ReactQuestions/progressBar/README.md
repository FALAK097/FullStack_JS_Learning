# How to solve the progress bar in React. Step by step procedure

1. Create a Basic UI with component ProgressBar.

2. Use useState hook and destructure the setValue to increment value in the ProgressBar with setInterval to 100ms to iterate it.

3. Handle edge cases by displaying values from 0 to 100% by using the below snippet this will handle when the value is less than or equal to zero and more than 100%.

```code
Math.min(100, Math.max(value, 0))
```

4. Adding progress fill animation

```
style={{ width: `${percent}%` }}
```

5. Additionally add accessibility and display percentage color as White after progress bar reaches 50%.

6. Might get question regarding add onComplete or onStart or something to make it more scalable.
