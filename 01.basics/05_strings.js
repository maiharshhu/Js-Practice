const name = "harsh"
const age = 25


// string iterpolation new type 
// console.log(`Hello my name is ${name} and my age is ${age}`)

const str = "Hello World";


console.log(str.charAt(0))
console.log(str.indexOf("l"))

const newStr = str.substring(0,5)
// console.log(newStr)

const newStr1 = str.slice()
console.log(newStr1) 

let Num = 123245.563;

console.log(Num.toLocaleString('en-in',{
    style:'currency',
    currency:'Inr',
    compactDisplay:"long",
    currencySign:"accounting",
    minimumFractionDigits:1,
    maximumFractionDigits:2,
    currencyDisplay:'code',

}))

// With date we can also convert to local date

let newDate = new Date();

// console.log(newDate.toLocaleString("en-in"))

// function toInr(date){
//     return date.toLocaleString('en-in',{
//         weekday:'long',
//         year:'numeric',
//         month:'long',
//         day:'numeric'
//     })
// }

// console.log(toInr(newDate))

// to get random values 

console.log((Math.floor(Math.random()*10)+1)
)
// to get value from min to max
let minVal = 10;
let maxVal = 20;

// console.log(Math.floor(Math.random()*(maxVal-minVal+1))+minVal)

