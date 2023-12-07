class FibonacciMemoizer {
  constructor() {
    this.cache = {};
  }

  fib(n) {
    // If the result is in the cache, return it
    if (this.cache[n] !== undefined) {
      console.log(`Retrieving Fibonacci(${n}) from cache`);
      return this.cache[n];
    }

    // Base case
    if (n < 2) {
      return n;
    }

    console.log(`Calculating Fibonacci(${n})`);
    // If not, calculate and store the result in the cache
    const result = this.fib(n - 1) + this.fib(n - 2);
    this.cache[n] = result;

    return result;
  }
}

// Example usage:

const fibonacciMemoizer = new FibonacciMemoizer();

console.log(fibonacciMemoizer.fib(10)); // Calculate Fibonacci number for 10
console.log(fibonacciMemoizer.fib(5)); // Retrieve Fibonacci number for 5 from the cache
console.log(fibonacciMemoizer.fib(10)); // Retrieve Fibonacci number for 10 from the cache
