console.log("Hello");
let number = 6;

// 1. If ... else if statement
if (number > 5) {
    console.log("number is greater than 5");
    console.log("another statement");
} else if (number == 5) {
    console.log("number is equal to 5");
}

if (number % 2 == 0) {
    console.log("number is even"); 
}

let result;
let marks = 60;

if (marks > 40) {
    console.log("pass");
    result = "pass"; 
} else {
    console.log("fail");
    result = "fail";
}

result = marks > 40 ? "pass" : "fail";
console.log(result, "result");


number = 4; 

if (number % 2 == 0) {
    console.log("even");
    result = "even"; 
    console.log("odd");
    result = "odd";
}

result = (number % 2 == 0) ? "even" : "odd";
console.log(result, "result");


if (number % 2 === 0) {
    console.log("The final check shows number is even");
}


let checkNum = -7; // Change this to test different numbers
let typeResult;

if (checkNum > 0) {
    console.log("The number is positive");
    typeResult = "positive";
} else if (checkNum < 0) {
    console.log("The number is negative");
    typeResult = "negative";
} else {
    console.log("The number is zero");
    typeResult = "zero";
}

console.log(typeResult, "result");

let targetNum = 15;

// If greater than 0 -> "positive". Else, check if less than 0 -> "negative". Otherwise -> "zero"
let statusResult = targetNum > 0 ? "positive" : (targetNum < 0 ? "negative" : "zero");

console.log(statusResult, "result");


let myName ;

myName = "bastabik"

const b = 5

const mod = 0 

console.log(mod, "lalal")
console.log(let, "let")

const sumTotal = a=b
console.log("a ko value",a)
// console.log("sum ko value",SUM)
// my_name -> snakecase
//myName -> camelcase
//MyName -> PascalCase
