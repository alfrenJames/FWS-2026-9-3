// The Challenge: Session 7 - Activity 1

// 🧮The Discount Calculator 

// Let's combine everything! Try to write a script that does the following:

// Create an Object for a shoe with a price and brand.
const shoe = {
  brand: "Adidas",
  price: 2000
}
// Create a variable called isMember and set it to true
let isMember = true;
// Use an if statement:
if (isMember) {
  // If isMember is true, calculate a 10% discount (Price * 0.9).
  let NewPrice = shoe.price * 0.9;
  // Print the new price to the console.
  console.log(`The discounted price for ${shoe.brand} shoes is $${NewPrice}.`);
}
else {
// If not, print the original price.
    console.log(`The original price for ${shoe.brand} shoes is $${shoe.price}.`);
}
