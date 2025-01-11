const user = {
    username: "harsh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // here this refers to function 
        console.log(this)
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// Here this is refers to empty 
// console.log(this)


// function chai() {
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "harsh"
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     let username = "Harsh";
//     console.log(this);
// }
// chai()

//  Here if we user {} then compulsary need to used return keyword in parnethesis () not required.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(1, 3))

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => { return num1 + num2 }
// const addTwo = (num1, num2) => ({ username: "hitesh" })

console.log(addTwo(3, 4))