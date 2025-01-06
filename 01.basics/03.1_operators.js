// Addition assignment (+=)--------------------------------------------------------------------------------------
// The addition assignment (+=) operator performs addition (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.
// let a = 2;
// let b = 'hello';

// console.log((a += 3)); // Addition
// // Expected output: 5

// console.log((b += ' world')); // Concatenation
// // Expected output: "hello world"

// x += y // same as x = x+y
// let bar = 5;
// bar += 2; // 7

// let baz = true;
// baz += 1; // 2
// baz += false; // 2
// console.log(baz)

// let x = 1n;
// x += 2n; // 3n

// x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// let foo = "foo";
// foo += false; // "foofalse"
// foo += "bar"; // "foofalsebar"

// let bar = 5;
// bar += "foo"; // "5foo"

//---------------------------------------------------------- Assignment (=) ------------------------------------------------------------------
// The assignment (=) operator is used to assign a value to a variable or property. The assignment expression itself has a value, which is the assigned value. This allows multiple assignments to be chained in order to assign a single value to multiple variables.

// let x = 2;
// const y = 3;
// console.log(x);
// // Expected output: 2

// console.log((x = y + 1)); // 3 + 1
// // Expected output: 4

// console.log((x = x * y)); // 4 * 3
// // Expected output: 12

// const x = y = 5;
// same as
// const x = (y = 5);

// const x = 5,
//   y = 5;

//   let x = 5;
//   let y = 10;
//   let z = 25;

//   x = y; // x is 10
//   x = y = z; // x, y and z are all 25

// let x;
// console.log(x); // undefined
// console.log(x = 2); // 2
// console.log(x); // 2

//>>>>>> Unqualified identifier assignment----------------------------------------------------------------------------------------------
// The global object sits at the top of the scope chain. When attempting to resolve a name to a value, the scope chain is searched. This means that properties on the global object are conveniently visible from every scope, without having to qualify the names with globalThis. or window. or global..

// Because the global object has a String property (Object.hasOwn(globalThis, "String")), you can use the following code:

// function foo() {
//     String("s"); // The function `String` is globally available
//   }

// foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
// Object.hasOwn(globalThis, "foo"); // true

//------------------->>>>>>>>>>>>>>>>>>>> Assignment with destructuring------------------------------------------
// The left-hand side can also be an assignment pattern. This allows assigning to multiple variables at once.

// const result = /(a+)(b+)(c+)/.exec("aaabcc");
// let a = "",
//     b = "",
//     c = "";
// [, a, b, c] = result;
// console.log(a, b, c); // "aaa" "b" "cc"
// // console.log(result)
