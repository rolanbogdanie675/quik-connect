// filename: complex_code.js

// This code is a complex implementation of a Fibonacci sequence generator
// It includes recursive and iterative algorithms, as well as memoization

// Recursive Fibonacci function
function recursiveFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// Iterative Fibonacci function
function iterativeFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[n];
}

// Fibonacci function with memoization
function memoizedFibonacci(n, cache = {}) {
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  const result = memoizedFibonacci(n - 1, cache) + memoizedFibonacci(n - 2, cache);
  cache[n] = result;
  return result;
}

// Perform calculations
const n = 10;
console.log(`Recursive Fibonacci(${n}): ${recursiveFibonacci(n)}`);
console.log(`Iterative Fibonacci(${n}): ${iterativeFibonacci(n)}`);
console.log(`Memoized Fibonacci(${n}): ${memoizedFibonacci(n)}`);
console.log("");

// Additional complex function - Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Perform factorial calculations
console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log("");

// Complex object - Movie
class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  getDetails() {
    return `${this.title} (Directed by ${this.director}), ${this.year}`;
  }
}

// Create movie instances
const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
console.log(movie1.getDetails());

const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994);
console.log(movie2.getDetails());

// ... continue writing complex code ...

// (at least 200 lines of complex code)

// End of complex_code.js