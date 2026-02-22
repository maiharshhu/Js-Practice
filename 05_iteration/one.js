// let num = 0
// while(num<=20){
//     console.log(num)
//     num+=2
// }

// const str = "Hello world";
// for(const l of str){
//     console.log(l)
// } 

let n = 4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log();
}