// Find all the prime numbers in the number array and write them into the primeNumber array

let numbers = [10, 13, 25, 23, 31, 35, 37, 45, 49, 51];



// Decomposing the problem
// We need to create an array called primeNumbers where we will store all the prime numbers
let primeNumbers = [];

// (for) Loop through the array of numbers to check each number
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  // edge (case)
  // If a number is less than 2, automatically assume that it is not a prime number
  if (number < 2) {
    continue;
  }

  // (for) Let's find out if a particular number is prime
  let isPrime = true;
  for (let j = 2; j < number; j++) {
    if (number % j == 0) {
      isPrime = false;
    }
  }

  // If the number is prime, write it into the primeNumber array
  if (isPrime) {
    primeNumbers[primeNumbers.length] = number;
  }
}

console.log(`numbers array: ${numbers}`);
console.log(`primeNumbers array: ${primeNumbers}`);