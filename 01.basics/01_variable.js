const accountId = 144453
let accountEmail = "harsh@google.com"
var accountPassword = '12435'
accontCity = "Jaipur" //we can define a variable with using const ,let and var but it is not recommended at all
let accountState;

accountEmail = "har@gmail.com"
accountPassword = "21212154"
accontCity = "hyderabad"

console.log(accountId);
/*
Prefer not to use var because of issue in block scope and functional scope
*/

let s = [accountId, accountEmail, accontCity, accountState]

console.table([accountId, accountEmail, accontCity, accountState])

console.log(s[3])