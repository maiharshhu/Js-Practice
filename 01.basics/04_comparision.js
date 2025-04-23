// Equality (==)
// The equality (==) operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

// console.log(1 == 1);
// // Expected output: true

// console.log('hello' == 'hello');
// // Expected output: true

// console.log('1' == 1);
// // Expected output: true

// console.log(0 == false);
// // Expected output: true

// "1" == 1; // true
// 1 == "1"; // true
// 0 == false; // true
// 0 == null; // false
// 0 == undefined; // false
// 0 == !!null; // true, look at Logical NOT operator
// 0 == !!undefined; // true, look at Logical NOT operator
// null == undefined; // true

// const number1 = new Number(3);
// const number2 = new Number(3);
// number1 == 3; // true
// number1 == number2; // false

// const object1 = {
//     key: "value",
//   };

//   const object2 = {
//     key: "value",
//   };

//   console.log(object1 == object2); // false
//   console.log(object1 == object1); // true

// const string1 = "hello";
// const string2 = String("hello");
// const string3 = new String("hello");
// const string4 = new String("hello");

// console.log(string1 == string2); // true
// console.log(string1 == string3); // true
// console.log(string2 == string3); // true
// console.log(string3 == string4); // false
// console.log(string4 == string4); // true

// const d = new Date("1995-12-17T03:24:00");
// const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
// console.log(d == s); //true

// const a = [1, 2, 3];
// const b = "1,2,3";
// a == b; // true, `a` converts to string

// const c = [true, 0.5, "hey"];
// const d = c.toString(); // "true,0.5,hey"
// c == d; // true
// console.log(c)
// console.log(d)
// console.log(typeof (d))
// console.log(typeof (c))
// console.log(typeof (a))

// -------------->>>>>>>>>>>Strict equality (===)
// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
console.log(1 === 1);
// Expected output: true

console.log('hello' === 'hello');
// Expected output: true

console.log('1' === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false

// Description:-
// The strict equality operators (=== and !==) provide the IsStrictlyEqual semantic.
// If the operands are of different types, return false.
// If both operands are objects, return true only if they refer to the same object.
// If both operands are null or both operands are undefined, return true.
// If either operand is NaN, return false.
// Otherwise, compare the two operand's values:
// Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
// Strings must have the same characters in the same order.
// Booleans must be both true or both false.

// "hello" === "hello"; // true
// "hello" === "hola"; // false

// 3 === 3; // true
// 3 === 4; // false

// true === true; // true
// true === false; // false

// null === null; // true

// "3" === 3; // false
// true === 1; // false
// null === undefined; // false
// 3 === new Number(3); // false

// const object1 = {
//     key: "value",
// };

// const object2 = {
//     key: "value",
// };

// console.log(object1 === object2); // false
// console.log(object1 === object1); // true
console.log(-3 == 3);
