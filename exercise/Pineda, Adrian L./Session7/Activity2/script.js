// The Challenge: Session 7 - Activity 2
// The Stock Counter (For Loop)

// Create a for loop that starts at 1 and goes up to 10.
for (let number = 1; number <= 10; number++) {

// Inside the loop, check if the current number is even or odd.
// Hint: Use the modulo operator %. If number % 2 === 0, it is even.
    if (number % 2 === 0) {
// For each number, print: "Box #1 is Odd" or "Box #2 is Even".
        console.log(`Box #${number} is Even`);
    }
    else {
        console.log(`Box #${number} is Odd`);
    }
}
