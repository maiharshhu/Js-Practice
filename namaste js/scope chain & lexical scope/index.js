// //----------Both function works in same way
// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// var b = 10;
// a();


// function a() {
//     console.log(b);
//     var b = 10;
//     c();
//     function c() {
//     }
// }
// a();

// function a() {
//     c();
//     function c() {
//     }
// }
// var b = 10;
// a();
// console.log(b);


// //-------------But when we are trying to get b outside of 
////function then we get uncaught referenceError
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}
a();
