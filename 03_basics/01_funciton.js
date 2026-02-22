function sayMyName() {
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");

}

// sayMyName()


function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(3, 4)

// console.log("Result:", result)

function loginUserMessage(username = "sam") {// default parameter
    if (!username) {//(username === undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitest")) // this value hitesh is passed to the function then default parameter override if no parameter is passed 
// console.log(loginUserMessage(username = 'harsh')) // also we can pass the argument to function 

// To pass multiple value we use rest operator and it will return a array
function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "harsh",
    price: 199,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondvalue(getArray) {
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([100, 200, 300, 400]))