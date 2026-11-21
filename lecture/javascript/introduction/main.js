//Initalizing Variables
const batchName = "FSW-2026-9-3";
//Displaying a message in the console using data types and variable declaration
//variable declaration and DataTypes:
let nameStudent = "John", nameTeacher="Alfren", subjectName="JavaScript", subjectCode = "JS101"; // string
let ageStudent = 30; // number
let isStudent = true; // boolean

nameStudent = "Alex";
//batchName = "FSW-2026-9-3.1"; // string

//Output after initializing variables
// console.log("Let's Learn JavaScript!");
// console.log(`Name:", ${nameStudent}, " Welcome to JavaScript!`);
// console.log("Age:", ageStudent + 5);
// console.log("Is Student:", isStudent);
// console.log(`Name of Teacher: ${nameTeacher}`);
// console.log("Batch Name:", batchName);


//variable contains object/List of data
//array of data
let studentNames = ["John", "Alex", "Mary", "David"];
//arrays start with 0 index
//arrays has length property and every items is called element 
//displaying array elements
// console.log("Student Names:", studentNames);
// console.log("First Student Name:", studentNames[0]);
// console.log("3rd Student Name:", studentNames[2]);
// console.log("2nd Student Name:", studentNames[1]);
// console.log("2nd to Last Student Name:", studentNames[studentNames.length - 2]);
// console.log("Last Student Name:", studentNames[studentNames.length - 1]);

//Objects
//object is a collection of key-value pairs; consists of properties and values
//object can contain other objects, arrays, and functions and can be nested
let messageConversation = {
    userName: nameStudent,
    message: "Hello, how are you?",
    timestamp: "2023-09-03 10:30:00",
    isRead: true,
    numberofMessages: 5,
    listOfFriends: studentNames,
    subject: {
        name: subjectName,
        code: subjectCode,
        listOfTopics: ["Variables", "Data Types", "Functions", "Objects"]
    }
}

// console.log("Message Conversation:", messageConversation);
// console.log("User Name:", messageConversation.userName);
// console.log("Message:", messageConversation.message);
// console.log("Timestamp:", messageConversation.timestamp);
// console.log("Is Read:", messageConversation.isRead);
// console.log("Number of Messages:", messageConversation.numberofMessages);
// console.log("List of Friends:", messageConversation.listOfFriends);
// console.log("Subject Name:", messageConversation.subject.name);
// console.log("Subject Code:", messageConversation.subject.code);
// console.log("List of Topics:", messageConversation.subject.listOfTopics);

//Mathematical Operations
let num1 = 10;
let num2 = 15;

// console.log("Addition:", num1 + num2);
// console.log("Subtraction:", num1 - num2);
// console.log("Multiplication:", num1 * num2);
// console.log("Division:", num1 / num2);
// console.log("Modulus:", num1 % num2);

//Comparison Operators
// console.log("Is num1 equal to num2?", num1 === num2);
// console.log("Is num1 not equal to num2?", num1 !== num2);
// console.log("Is num1 greater than num2?", num1 > num2);
// console.log("Is num1 less than or equal to num2?", num1 <= num2);


//Logical Operators
// console.log("Is num1 greater than 5 AND num2 less than 20?", (num1 === 5) && (num2 < 20)); 
// // AND operator needs both conditions to be true
// console.log("Is num1 less than 5 OR num2 greater than 10?", (num1 > 5) || (num2 === 10));
// // OR operator needs at least one condition to be true, the only way for it to be false is if both conditions are false
// console.log("Is NOT true?", !false);
//NOt operator reverses the boolean value, if it is true it becomes false and vice versa


