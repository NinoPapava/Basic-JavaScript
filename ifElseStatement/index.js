const userIsAdmin = false;
const userIsStudent = true;

let discount;

if (userIsAdmin) {
  console.log("You are admin!");
  discount = 25;
} else if(userIsStudent){
  console.log("You are student!");
  discount = 15;
} else {
  console.log("You are user!");
  discount = 0;
}

console.log("Your discount: " + discount + "%");
console.log("THE END!");