// x value
let x = 5;

console.log(x);

// javascript value
function add(number1: number, number2: number) {
  return number1 + number2;
}

let userInput = "4";

let result = add(Number("3"), +userInput);

console.log(result);

// object types
const author = {
  name: "Nino",
  lastName: "Papava",
};

author.name = "Gvantsa"; // Gvantsa
// author.age = 26;    error
console.log(author); // { name: 'Gvantsa', lastName: 'Papava' }

///////////////
type Mentor = {
  name: string;
  lastName: string;
  age?: number;
};

const user: Mentor = {
  name: "Nino",
  lastName: "Papava",
};

user.name = "Gvantsa";
user.age = 26;

console.log(user); // { name: 'Gvantsa', lastName: 'Papava', age: 26 }

// typed array
const allScores4: number[] = [];
allScores4.push(55);
console.log(allScores4);

const allScores1: string[] = [];
allScores1.push("string");
console.log(allScores1);

const allScores3: any[] = [];
allScores3.push(21);
allScores3.push("Hi");
console.log(allScores3);
