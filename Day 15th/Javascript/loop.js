


// for (let  i = 0; i<9 ; i++) {
//     console.log("Bastabik")
// }

// for (let i = 10; i>1; i--){
//     console.log(i)
// }

// 0      -1
// 1      -2
// 2      -3
// 3      -4
// 4      -5
// 5      -6
// 6
// 7
// 8

let i = 10

while (i<5 ) {
console.log("Hello from while") 
i++;
}

//for (variable ; stop loop condition; variable change){}
//expression
//}


// expression first then condition works
do {
    console.log("Hello from do while")
    i++;
} while (i<5);


//Loop example: 

let enteredPin;
const correctPin = "1234";

do{ 
enteredPin = prompt("Enter your ATM PIN:");

if (enteredPin !== correctPin) {
    alert("Incorrect PIN. Please try again.")

}
} while (enteredPin !== correctPin);
alert("Access Granted!");


// if (enteredPin !=== null) {
//     alert("Transaction cancelled.");
//     break;
