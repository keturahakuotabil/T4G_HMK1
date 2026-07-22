// Prompt the user for their details
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
let userEmail = prompt("Enter your email:");

// Display the information back to the user
let message = `Hi ${userName}, you are ${userAge} years old and we'll keep in touch via your email: ${userEmail}`;
alert(message);



let name = "keturah";
console.log("Name:", name);


let age = 25;
console.log("Age:", age);


let addition = 15 + 10;
console.log("Addition:", addition); // output addition:25


let subtraction = 20 - 8;
console.log("Subtraction:", subtraction); // output subtraction:12


let division = 30 / 5;
console.log("Division:", division); // output division:6


let multiplication = 6 * 7;
console.log("Multiplication:", multiplication); // output multiplication:42


let remainder = 15 % 4;
console.log("Remainder:", remainder); // output remainder:3


let isStudent = true;
console.log("Boolean:", isStudent); // output: Boolen: true 


let numberValue = 100;
console.log("Type of numberValue:", typeof numberValue); // output : Typeof numberValue: number


let stringValue = "JavaScript";
console.log("Type of stringValue:", typeof stringValue); // output: typeof stringvalue: string

// A. Prompt for name
let userName = prompt("Enter your name:");

// B. Prompt for age
let userAge = Number(prompt("Enter your age:"));

// C. Prompt for email
let userEmail = prompt("Enter your email:");

// D. Alert the information
alert(`Hi ${userName}, you are ${userAge} years old and we'll keep in touch via your email: ${userEmail}`);

// Age Conditions
if (userAge < 13) {
    alert("You are a child.");
} else if (userAge >= 13 && userAge <= 17) {
    alert("You are a teenager.");
} else if (userAge >= 18 && userAge <= 35) {
    alert("You are a young adult.");
} else if (userAge >= 36 && userAge <= 59) {
    alert("You are an adult.");
} else if (userAge >= 60) {
    alert("You are a senior citizen.");
} else {
    alert("Invalid age entered.");
}