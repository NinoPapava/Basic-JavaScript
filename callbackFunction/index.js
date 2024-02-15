// Enter the arrow function as a callback


// arrow function
function runXTimes(times, f) {
  for (let i = 0; i < times; i++) {
    f(i);
  }
};

runXTimes(3, (text) => {
  console.log('Hello World!' + text);
});


// forEach
const array1 = [1, 2, 3, 4];

const logger = item => {
  console.log(`Information: ${item}`);
};

array1.forEach(logger);


// forEach, array functions
const array = [1,2,3,4];

array.forEach(item => {
  console.log(`Information: ${item}`);
});

// map 
const array3 = [1,2,3,4,5,6,7,8,9];

const newArray = array3.map(item => item * 2);

console.log(newArray);

// map array

const array4 = [1,2,3,4];

function myMap(array, f) {
    const myNewArray = [];
    for (let i = 0; i < array.length; i++) {
        myNewArray.push(f(array[i]));
    }
    return myNewArray;
}

const myArray = myMap(array, (item) => item * 2 );

console.log(myArray);


// find 
const array5 = [1,2,3,4,5,6,7,8,9,10,11];

const found = array5.find(item => item == 6);

console.log(found);


// filter 
const array6 = [1,2,3,4,5,6,7,8,9];

const filtered = array6.filter(item => item % 2 == 0);

console.log(filtered);


// reduce
const array7 = [1,2,3,4,5,6,7,8,9];

const result = array7.reduce((sum, item) => sum + item);

console.log(result);


// sort 
const array8 = [1,2,3,4,5,6,7,8,9,10];

array8.sort((a,b) => b - a);

console.log(array8);