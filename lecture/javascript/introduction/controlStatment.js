let grade = 25;
let gradeColor = ["green", "red"];

//Control Statements checks if the condition is true or false and executes the code accordingly
if (grade >= 75) {
    console.log("passed");
    console.log("Grade Color:", gradeColor[0]);
} else {
    console.log("failed");
    console.log("Grade Color:", gradeColor[1]);
}
grade= 97;
//Ternary Operator is a shorthand for if-else statement
let result = (grade >= 75) ? "passed" : "failed";
console.log("Result:", result);


//else if statement checks multiple conditions and executes the code accordingly
if (grade >= 97) {
    console.log("With Highest Honors");
} else if (grade >= 94) {
    console.log("With High Honors");
} else if (grade >= 87) {
    console.log("With Honors");
} else if (grade >= 75) {
    console.log("Passed");
}
 else {
    console.log("Failed");
}

//Switch Statement checks the value of a variable and executes the code accordingly
switch (grade) {
    case (grade >= 97):
        console.log("With Highest Honors");
        break;
    case (grade >= 94):
        console.log("With High Honors");
        break;
    case (grade >= 87):
        console.log("With Honors");
        break;
    case (grade >= 75):
        console.log("Passed");
        break;
    case (grade < 75):
        console.log("Failed");
        break;
}