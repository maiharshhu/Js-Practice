const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Harsh")) //Returns a boolean value either true or false
// console.log(Array.from("Harsh"))
// console.log(Array.from({ name: "Harsh" }))//*INTERESTING* It will ask either you want to make string from key or string from value if it is not defined then return a empty Array.

// let score1 = 100
// let score2 = 200
// brlet score3 = 300

// console.log(Array.of(score1, score2, score3))

let array1 = [1,3,6];
let arr2 = [3,4,5];
let arr3 = array1.concat(arr2);
// console.log(arr3)

let nesArr = [1,2,4,[3,5,6,[73,45,55]],4,5]
let uArr = nesArr.flat(Infinity)
// console.log(uArr)

let sArr = Array.from("harsh");
console.log(sArr)

let oArr = Array.from({name:"harsh"});
console.log(oArr)

let a = 1;
let b = 2;
let c = 3;

let mArr = Array.of(a,b,c)
console.log(mArr)