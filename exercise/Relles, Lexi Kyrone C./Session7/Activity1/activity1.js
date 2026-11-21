// Create an Object for a shoe with a price and brand.
const shoe = {
    // brand (String)
    brand: "Generic",
    // price (Number)
    price: 2500,
};

// Create a variable called isMember and set it to true.
let isMember = true;

// Use an if statement:
if (isMember){
    // If isMember is true, calculate a 10% discount (Price * 0.9).
    let discountedPrice = shoe.price * 0.9;

    // Print the new price to the console.
    console.log("Original: $" + shoe.price)
    console.log("Membership Discount: $" + discountedPrice)
}
// If not, print the original price.
else {
    console.log("Original Price: $" + shoe.price)
    console.log("Apply for Membership to get 10% off!")
}