const userIsAdmin = true;
let discount;

if (userIsAdmin) {
  console.log("You are admin!");
  discount = 25;
} else {
  console.log("You are user!");
  discount = 0;
}

console.log("Your discount: " + discount);
console.log("THE END!");