// Create an Object named shoe with the following properties:
// brand (String)

// size (Number)

// isAvailable (Boolean)

// stock (Number)
const shoe = {
  brand: "Adidas",
  size: 42,
  isAvailable: true,
  stock: 10
}
// Write an if/else statement that checks the stock:
if (shoe.stock === 0) {
  shoe.isAvailable = false;
  console.log("Out of Stock!");
}
// If stock is 0, change isAvailable to false and print "Out of Stock!".
// If stock is greater than 0, print "We have [stock] pairs
else if (shoe.stock > 0) {
  console.log(`We have ${shoe.stock} pairs of ${shoe.brand} shoes left!`);
}
