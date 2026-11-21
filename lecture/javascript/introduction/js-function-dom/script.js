// console.log("Hello, World!");

//how to create function in JavaScript

// Function Declaration
// return type function parameters
function greet(name) {
    return "Hello, " + name + "!";
}

//return type function without paramenters
function greetName() {
    return "Hello Alfren!";
}

// console.log(greet("Alice"));
// console.log(greet("Alfren"));
// console.log(greetName());


// STEP 1: SELECT HTML ELEMENTS
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");


// STEP 2: CREATE CALCULATOR FUNCTION

function calculate() {
    // Get input values
    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    // Get selected operator
    const selectedOperator = operator.value;
    let answer = 0;
    let operationClick = "";
    // STEP 3: CHECK/Validate INPUTS 

    if (num1.value === "" || num2.value === "") {

        result.textContent = "Please enter both numbers.";
        return;

    }
    // STEP 4: PERFORM CALCULATION
    if (selectedOperator === "+") {
        answer = number1 + number2;
        operationClick = "Sum";
    } else if (selectedOperator === "-") {
        operationClick = "Difference";
        answer = number1 - number2;
    } else if (selectedOperator === "*") {
        operationClick = "Product";
        answer = number1 * number2;
    } else if (selectedOperator === "/") {
        if (number2 === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        operationClick = "Quotient";
        answer = number1 / number2;
    }
    // STEP 5: DISPLAY RESULT
    result.textContent = operationClick.toUpperCase() + " is: " + answer;

}

// STEP 6: ADD EVENT LISTENER
calculateBtn.addEventListener("click", calculate);
