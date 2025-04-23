//Types of datatype

// primitive

// 7types : string , Number, boolean, null, undefined, symbol, BigInt



//Refrence (Non primitive)

// Array, Objects, Functions

// const heros = ["saktimaan", "naagraj", "doga"]
// console.log(typeof heros)

// let myObj = {
//     name: "harsh",
//     age: 22,
// }

// console.log(typeof myObj)

// const Myfunction = function () {
//     console.log("hello world");
// }

// console.log(typeof Myfunction)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)Refrence

//stack example
//Below is a example of how data is stored in stack so after storing if you want value inside another variable so it will give a copy of actual value/data and if you make any changes in this data it will not change the original value/data.
// let myrealname = 'Harshjain'

// let myusername = myrealname

// myusername = "maiharshhu"

// console.log(myrealname)
// console.log(myusername)

// Heap example
//Below is a example of how data is stored in heap so after storing if you want value inside another variable so it will give will give you a actual value/data or refrence to original value/data and if you make any changes in this then it will changes original value/data.

// let userOne = {
//     email: "Harsh@gmail.com",
//     upiid: "23479283@upi",
// }

// let userTwo = userOne

// userTwo.email = "maiharshhu@gmail.com"

// console.log(userOne)
// console.log(userTwo)


// function example
const myFunc = function () {
    console.log('hello world');
}

console.log(myFunc());
console.log(typeof (myFunc));

