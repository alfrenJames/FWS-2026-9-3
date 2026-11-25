// 🤑The "Price Increaser" (For Loop + Math)

// Imagine you are running a sale, and you need to see how a price grows if you add a tax for 5 different categories.

// Create a variable called basePrice and set it to 100.
let basePrice = 100;

// Create a for loop that runs 5 times.
for (let number = 0; number < 5; number++) {

// In each loop, add $10 to the basePrice.
basePrice += 10;

// Print the result of each step so you can see the price climbing (110, 120, 130...).
console.log(`$${basePrice}`);
}
