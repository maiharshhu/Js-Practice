// let score = "33abc"
// console.log(typeof score); // string
// console.log(typeof (score)); //string


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);// if score is '123cl' means alphanumeric then it will give NaN(NotaNumber) as a O\P


// let score = null

//true // give 1
//false // give 0
// undefined  //it will give NaN
//null //give 0 

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
//"33abc" => NaN
// true => 1; false => 0 


// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 =>true; 0=> false
//"" =>false
// "hitesh" => true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *****************************Operations *********************************

let value = 3
let nagvalue = -value
// console.log(nagvalue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello"
let str2 = " harsh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log('hello ' + 'everyone');
// Expected output: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"

// If one side is a string, the other operand is also converted to a string and they are concatenated.
// If they are both BigInts, BigInt addition is performed. If one side is a BigInt but the other is not, a TypeError is thrown.
// Otherwise, both sides are converted to numbers, and numeric addition is performed.

true + 1; // 2
false + false; // 0

1n + 2n; // 3n

1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
"1" + 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions

1n + BigInt(2); // 3n
Number(1n) + 2; // 3

"foo" + "bar"; // "foobar"
5 + "foo"; // "5foo"
"foo" + false; // "foofalse"
"2" + 2; // "22"
