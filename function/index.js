// function declaration
function welcome(userFirstName, messages = 0) {
    console.log(`Hello ${userFirstName}, you have ${messages} messages`);
}

welcome('Gvantsa', 5);  // Hello Gvantsa, you have 5 messages
welcome('Nino');  // Hello Nino, you have 0 messages

function welcomeMessage(userFirstName, messages = 0) {
    return (`Hello ${userFirstName}, you have ${messages} messages`);
}
console.log(welcomeMessage('Nino', 8));  // Hello Nino, you have 8 messages


//////////////////////////////////////////////////////////////
console.log(`-----------------------------------------------`);

// function declaration
function calculateAge(birthYear) {
    // output
    return 2024 - birthYear;
}

// Store in a variable
const age = calculateAge(2000);
console.log(`age: ${age}`);  // 24

// Use in arithmetic operation
console.log(`${calculateAge(2000)} ` * 2);

// Use in condition
if (calculateAge(2000) > 18) {
    console.log(`Congratulations, you are an adult.`);
}


//////////////////////////////////////////////////////////////
console.log(`-----------------------------------------------`);


// function expression, We saved the anonymous function in a variable
const welcomeMess = function (userFirstName, messages = 0) {
    return `Hello ${userFirstName}, you have ${messages} messages`;
}
console.log(welcomeMess('Nickolas', 3));


//////////////////////////////////////////////////////////////
console.log(`-----------------------------------------------`);


// arrow function expression
const welcomeMes = (userFirstName, messages = 0) => {
    return `Hello ${userFirstName}, you have ${messages} messages`;
}
console.log(welcomeMes('Alex', 7));

// In the case of one parameter, we write without brackets

// const welcomeMes = userFirstName => {
//     return `Hello ${userFirstName}, you have ${messages} messages`;
// }


// If the first command is return, we can not write {} and return

// const welcomeMes = userFirstName => `Hello ${userFirstName}, you have ${messages} messages`;

// The code written after the return command will not run


// Calling another function within a function
function calcAge(birthYear){
    return 2024 - birthYear;
}

const averageAge = (person1, person2) => {
    const avgAge = (calcAge(person1) + calcAge(person2)) / 2;
    console.log(`Average age of two persons: ${avgAge}`);
}

averageAge(2000, 1992);  // Average age of two persons: 28