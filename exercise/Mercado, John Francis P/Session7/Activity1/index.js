// 🧮The Discount Calculator 

// Let's combine everything! Try to write a script that does the following:

// Create an Object for a shoe with a price and brand.

const shoe = {
    price: 100,
    brand: "Nike"
};

// Create a variable called isMember and set it to true.
let isMember = true;
let price = 0;
// Use an if statement:
if (isMember){
    // If isMember is true, calculate a 10% discount (Price * 0.9).
    price = shoe.price * 0.9;
    // Print the new price to the console.
    console.log("New price with discount: $" + price);
    
}
else {
    // If not, print the original price.
    console.log("Original price: $" + shoe.price);
};
