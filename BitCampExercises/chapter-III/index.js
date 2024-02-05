// Project 1 - Saying Hello
// A program that asks you "What's your name?" will wait for your answer and say "Hello, your name"
let name = String(prompt("What's your name?: "));
console.log(`Hello, ${name}`);


// Project 2 - Counting the Number of Characters - counting the number of characters
// A program that requires us to enter a word or sentence (string) and then shows us how many characters our entry consists of.
let myString = String(prompt("Write a word or a sentence. The program will count the number of characters in the string you type -  "));
let char = myString.length;
console.log(`The number of characters in the string you entered is: ${char}`);


// Project 3 - Printing Quotes - Printing quotes
// we use console.log and prompt functions; escape characters
let quote = String(prompt("Enter a famous person quote:  "));
let author = String(prompt("Enter the author of this quote:  "));

console.log(JSON.stringify(quote));
console.log(`The author is: ${author}`);


// Project 4 - Indoor Voice
// Displays the entry in lowercase only
let letter = String(prompt("Enter text:  "));
console.log(letter.toUpperCase());

// Displays the entry in uppercase only
console.log(letter.toLowerCase());



// Project 5 - Playback Speed
const letter2 = String(prompt("Enter text for result:  "));
console.log(letter2);
const result2 = letter2.replaceAll(' ', '...');
console.log(result2);



// Project 5 - Making Faces

