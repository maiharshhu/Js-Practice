// if (true) {
//     let a = 1
//     const b = 2
//     var c = 3
// }

// console.log(a)//Reference error: a is not defined
// console.log(b)//Reference error: b is not defined
// console.log(c)// 3



// /
console.log(addone(5))

function addone(num) {
    return num + 1

}

console.log(addTwo(5)) // it will throw error
const addTwo = function (num) {
    return num + 2
}

