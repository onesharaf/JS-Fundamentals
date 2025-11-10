#!/usr/bin/node

function factorial(n) {
  // Requirement: Factorial of NaN is 1
  if (isNaN(n)) {
    return 1;
  }
  
  // Base case for recursion: 0! = 1 and 1! = 1
  // This also handles negative numbers, returning 1
  if (n <= 1) {
    return 1;
  }
  
  // Recursive step
  return n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));