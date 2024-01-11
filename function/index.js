function welcome(userFirstName, messages = 0){
    console.log(`Hello ${userFirstName}, you have ${messages} messages`);
}

welcome('Gvantsa', 5);  // Hello Gvantsa, you have 5 messages
welcome('Nino');  // Hello Nino, you have 0 messages

function welcomeMessage(userFirstName, messages = 0){
  return (`Hello ${userFirstName}, you have ${messages} messages`);
}
console.log(welcomeMessage('Nino', 8));  // Hello Nino, you have 8 messages


//////////////////////////////////////////////////////////////
console.log(`-----------------------------------------------`);


function calculateAge(birthYear){
    return 2024 - birthYear;
}

// Store in a variable
const age = calculateAge(2000);
console.log(`age: ${age}`);  // 24

// Use in arithmetic operation
console.log(`${calculateAge(2000)} ` * 2);

// Use in condition
if(calculateAge(2000) > 18){
    console.log( `Congratulations, you are an adult.`);
}