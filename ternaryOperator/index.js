const userIsAdmin = false;
const discount = userIsAdmin ? 25 : 10;
console.log("Discount: " + discount);

const userDistance = 45;
const shippingCost = userDistance <= 50 ? 10 : 15;
console.log("Shipping cost: " + shippingCost + "₾");

