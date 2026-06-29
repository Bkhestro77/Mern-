console.log("Hello World!!")
console.warn("warning message")
console.error("error message")

let a = 10;

console.log(a+10)
a=20
a=30
a == 30  //compare  (condition : if  or else)

// console.log("Sum",a)

const b =5

// console.log(let,"let")

// const mod = 5 % 2 
// const mod = 35 % 0 
const mod = 35 % 2    //to findout if the number is odd or even  then its useful 
 console.log(mod , "lalal")

const sum = a+b

// b=15


// Reassigning the value without 'let'
let myName = "bastabik"; // This declares the variable the first time
myName = "someone else";// This 
// myName= "Bastabik" (only can occur in let but not in cons)

// const mySuername ; (its ilelegal)






console.log("a ko value",a)
console.log("sum ko value",sum)

// var (used in previous x-function
// space won't work ; snake case ; in programming language mostly  small words used; 
// Variable naming examples
// my_name - snakecase
// myName - camelCase
// MyName - PascalCase

// Data Types:

let name = "bastabik";    // String

console.log(typeof name,  "type of name")//  console.log(typeof name,  "type of name")  
let age = 16;               // Number
let isLoggedIn = true;      // Boolean

let userObj = {    //object
    name: "abc",
    age: 16,
    isLoggedIn: false
}; 

console.log(typeof userObj, "typess of userobj")

let array1 = ["abc" , "def", 2 ,5,, true , {
    name:"abc",
    age:16,
    isLoggedIn:false
}]


let value = null//null    // 21. null is the value
let anothervalue = undefined //undefined  // doesn't  have any value 
console.log(name, age, isLoggedIn);
console.log(userObj)   //printing user object
console.log(array1)

console.log(value,anothervalue)
console.log(typeof value, typeof anotherValue)