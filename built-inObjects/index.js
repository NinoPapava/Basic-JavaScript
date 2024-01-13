// Built-in objects in JavaScript

// Number
const x = Number('123123');
console.log(typeof x); // number

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// methods
// toFixed - The number of digits after the period
let y = 5.1234;
console.log(y.toFixed(2)); // 5.12
console.log(y); // 5.1234

// toString - converts number to string
y = 5.1234;
console.log(typeof y.toString()); // string
console.log(typeof y); // number

// toPrecision - rounding off non-whole numbers
y = 5.1264;
console.log(y.toPrecision(1));  // 5
console.log(y.toPrecision(2));  // 5.1
console.log(y.toPrecision(3));  // 5.13


////////////////////////////////////////////////////////
console.log(`---------------------------------------------`);


// Math module
y = Math.abs(-15);
console.log(y);  // 15

// Rounding off
y = Math.round(5.95);
console.log(y);  // 6

// Rounding down
y = Math.floor(5.95);
console.log(y);  // 5

// Round up
y = Math.ceil(5.15);
console.log(y);  // 6

// Converting to quality
y = Math.pow(5, 2);
console.log(y);  // 25

console.log(5 ** 2);  // 25

// Extracting the square root
y = Math.sqrt(25);
console.log(y);  // 5

// Random numbers from 0 to 1
y = Math.random();
console.log(y);  // 0.05506634918446296

// max numbers
y = Math.max(10, 40, 28, 78, 85);
console.log(y);  // 85

// min numbers
y = Math.min(10, 40, 28, 78, 85);
console.log(y);  // 10


////////////////////////////////////////////////////////
console.log(`---------------------------------------------`);


// String
// Finding another string within a string
const message = `Hello, how are you?`;
let search = `Hello`;
const found = message.includes(search);
console.log(found);  // true

// repeat
const block = '#';
const line = block.repeat(5);
console.log(line); // #####

// text correction
const welcMessage = `Hello Gvantsa!`;
const goodbyeMessage = welcMessage.replace(`Hello`, `Goodbye`);

console.log(welcMessage); // Hello Gvantsa
console.log(goodbyeMessage); // Goodbye Gvantsa

// Split text and write to array
const welcomeNewMessage = `Hello, how are you?`;

const words = welcomeNewMessage.split(` `);
console.log(words); // [ 'Hello,', 'how', 'are', 'you?' ]

const detector = welcomeNewMessage.startsWith(`Hello`);
console.log(detector); // true

const detector1 = welcomeNewMessage.endsWith(`you?`);
console.log(detector1); // true

 
////////////////////////////////////////////////////////
console.log(`---------------------------------------------`);


// Array
// Write to the right in the array
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]

// Delete the last item
const removedElement = array.pop(); // 6
const removedElement2 = array.pop(); // 5

console.log(array); // [ 1, 2, 3, 4 ]

// Delete from left
// const array = [1, 2, 3, 4, 5];
// const removedElement = array.shift(); // 1
// console.log(array); // [ 2, 3, 4, 5 ]

// Write to the left
// const array = [1, 2, 3, 4, 5];
// const removedElement = array.unshift(6); // 6
// console.log(array); // [ 6, 1, 2, 3, 4, 5 ]

// Reversing an array
array.reverse();
console.log(array); // [5,4,3,2,1]

// Paste text, join
const word = [`Hello,`, `how`, `are`, `you?`];
const joinWords = word.join(` `);
console.log(joinWords); // Hello, how are you?



////////////////////////////////////////////////////////
console.log(`---------------------------------------------`);


// Date