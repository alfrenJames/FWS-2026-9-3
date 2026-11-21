// 📦The "Stock Counter" (For Loop)
// In this scenario, you are managing a warehouse. You need to print out a message for every item you count in a row.

// Create a for loop that starts at 1 and goes up to 10.
for (let i = 0; i < 10; i++){
    // Inside the loop, check if the current number is even or odd.
    // Hint: Use the modulo operator %. If number % 2 === 0, it is even.
    if (i % 2 === 0){
        // For each number, print: "Box #1 is Even" or "Box #2 is Odd".
        console.log(`Box #${i+1} is Even`)
    }
    else{
        console.log(`Box #${i+1} is Odd`)
    }
}
