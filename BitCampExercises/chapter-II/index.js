const prompt = require("prompt-sync")({ sigint: true });

// A program that checks whether a number is even or odd
let theNumber = parseInt(prompt("Enter a Value: "));

if (((theNumber % 2) == 0) && theNumber != 0) {
  console.log(`Your number ${theNumber} - is ODD`);
} else if (theNumber == 0) {
  console.log(`Your number ${theNumber} - is ZERO`);
} else {
  console.log(`Your number ${theNumber} - is EVEN`);
}


// A program that checks whether a number is positive, negative, or zero
if (theNumber == 0) {
  console.log("The number you entered is zero.");
}
else if (theNumber > 0) {
  console.log("The number you entered is positive.");
}
else if (theNumber < 0) {
  console.log("The number you entered is negative.");
}


// A program that checks whether a number is divisible by another number
let numberI = parseInt(prompt("Enter a Value to divide number: "));
let numberII = parseInt(prompt("Enter a Value separator number: "));

if ((numberI % numberII) == 0) {
  console.log("Number is divisible");
} else {
  console.log("Number is not divisible");
}


// The program checks whether the string is empty or not
let text = String(prompt("Enter text in string: "));

if (text.length >= 1) {
  console.log("The string is not empty: " + text);
} else {
  console.log("The string is empty: ' '");
}



// The program checks whether a string contains a specific word
console.log("Enter the sentence first and then the word, because the program will check if the word is in the first sentence.");

const myString = String(prompt("Write a sentence: "));
const word = String(prompt("Write the word you want to check for in the first sentence: "));
console.log(myString.includes(word));



// The program finds the minimum of two numbers
console.log("Enter the first number, then the second, the program will find the minimum of these two numbers");

let firstNum = parseInt(prompt("Enter the first number: "));
let secondNum = parseInt(prompt("Enter the second number: "));

let minNum = Math.min(firstNum, secondNum);
console.log(`The minimum of the numbers you entered is: ${minNum}`);