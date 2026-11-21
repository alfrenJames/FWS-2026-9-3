// 👨‍💻The "Shoe Store Inventory" (Objects)

// Now, let’s get organized. You need to create a digital "ID card" for a product in your store and perform a simple check.

// Create an Object named shoe with the following properties:
// brand (String)
// size (Number)
// isAvailable (Boolean)
// stock (Number)
const shoe = {
    brand: "Nike",
    size: 10,
    isAvailable: true,
    stock: 5
};

// Write an if/else statement that checks the stock:
// If stock is 0, change isAvailable to false and print "Out of Stock!".
if (shoe.stock == 0){
    shoe.isAvailable = false;
    console.log(`${shoe.brand} is Out of Stock!`);
}
// If stock is greater than 0, print "We have [stock] pairs of [brand] shoes left!".
else if (shoe.stock > 0){
    console.log(`We have ${shoe.stock} pairs of ${shoe.brand} shoes left!`);
}
