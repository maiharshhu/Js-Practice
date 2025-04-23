//Singleton
// whenever we make object using constructor then it is called singleton

const mySym = Symbol("key1")

//Object literals
const JsUser = {
    name: "Harsh",
    "full name": "Harsh Jain",
    [mySym]: "mykey1",
    age: 25,
    location: "Hyderabad",
    email: "harrrsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// //To access the data from any object we use can do like below example
// console.log(JsUser.email)
// console.log(JsUser['email'])
// //But if your key is string then you need to use as a string in bracket
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //here if you want to use as symbol and print then need to use [] brackets

//// To override any value of object we can achieve by doing .
JsUser.email = "hj.440@gmail.com"

//freeze - Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// Object.freeze(JsUser)
JsUser.email = "jainharsh@gmail.com"
// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello Js user");
}

// // Here using this keyword we can access all the elements of object
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())