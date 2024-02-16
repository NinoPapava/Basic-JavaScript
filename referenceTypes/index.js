// object will be copied

const mentor = {
  name: 'John',
  age: 25
};

const mentor2 = { ...mentor };
mentor2.name = 'Aka';

console.log(mentor2);
console.log(mentor);


// //////////////
const obj1 = {
  name: 'John'
};

const obj2 = {
  age: 25
};

const obj3 = {
  ...obj1,
  ...obj2
};

console.log(obj3);



// deep copy
const author = {
  name: 'Nino',
  lastName: 'Papava',
  cars: [1, 2, 3]
};

const author2 = structuredClone(author);

author2.name = 'Linda';
author2.cars.push(27);

console.log(author);
console.log(author2);