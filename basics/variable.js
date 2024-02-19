const accountId= 1234 //the value cannot be changed
let accountEmail="abhijeet@gmail.com"
 var accountPassword="12345"
 accountCity= "Kolkata"
let accountState;  // If the variable does not have value it would be considerd as undefined.
//this is not allowed as const value cannot be changed
//accountId=23

console.log(accountId) //log likh ke entermaro console.log will appear

//In modern javascript always use "let" as there was issue in use of var for its scope problem

console.table([accountId,accountEmail,accountEmail,accountPassword,accountState,accountCity])
