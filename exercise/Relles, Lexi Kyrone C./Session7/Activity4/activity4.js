// Create an Object named shoe with the following properties:

const shoe = {
    // brand (String)
    brand: "Generic",
    // size (Number)
    size: 10,
    // isAvailable (Boolean)
    isAvailable: true,
    // stock (Number)
    stock: 100
};

// Write an if/else statement that checks the stock:
// If stock is 0, change isAvailable to false and print "Out of Stock!".
if (shoe.stock == 0){
    shoe.isAvailable = false;
    console.log(`${shoe.brand} is Out of Stock!`)
}

// If stock is greater than 0, print "We have [stock] pairs of [brand] shoes left!".
else if (shoe.stock > 0){
    shoe.isAvailable = true;
    console.log(`${shoe.brand} We have ${shoe.stock} pairs of ${shoe.brand} shoes left!`)
}