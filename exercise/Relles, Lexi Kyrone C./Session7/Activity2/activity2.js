// Create a for loop that starts at 1 and goes up to 10.
for (let i = 1; i <= 10; i++){
    // Inside the loop, check if the current number is even or odd.
    // Hint: Use the modulo operator %. If number % 2 === 0, it is even.
    if (i % 2 == 0){
        // For each number, print: "Box #1 is Even" or "Box #2 is Odd".
        console.log("Box #" + i + " is Even");
    }
    else {
        console.log("Box #" + i + " is Odd");
    }
}