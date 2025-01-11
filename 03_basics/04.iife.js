// Immediately Invoked Function Expression (IFFE)
// save from global scope polution for that we user iffe

(function chai() {
    console.log(`DB CONNECTED`);

})();

// iffe without name 
(
    () => {
        console.log(`DB CONNETED TWO`);
    })();


// iffe with name 
(
    (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    })('harsh')