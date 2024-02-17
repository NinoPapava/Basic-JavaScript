// x value
var x = 5;
console.log(x);
// javascript value
function add(number1, number2) {
    return number1 + number2;
}
var userInput = "4";
var result = add(Number("3"), +userInput);
console.log(result);
// object types
var author = {
    name: "Nino",
    lastName: "Papava",
};
author.name = "Gvantsa"; // Gvantsa
// author.age = 26;    error
console.log(author); // { name: 'Gvantsa', lastName: 'Papava' }
var user = {
    name: "Nino",
    lastName: "Papava",
};
user.name = "Gvantsa";
user.age = 26;
console.log(user); // { name: 'Gvantsa', lastName: 'Papava', age: 26 }
// typed array
var allScores4 = [];
allScores4.push(55);
console.log(allScores4);
var allScores1 = [];
allScores1.push('string');
console.log(allScores1);
var allScores3 = [];
allScores3.push(21);
allScores3.push('Hi');
console.log(allScores3);
