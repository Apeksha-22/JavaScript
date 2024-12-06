console.log("Apeksha-Jain");
// js phle scope ke basucs ko nhi janta tha 
// prefer not to use var because of issue in block scope and function scope

const accountId = 133789
let accountEmail = "abcd@1234.com"
var accountPassword = "1297676465"
accountCity = "Jaipur"
let accountState;


//const ke varible ko change nhi kar sakte hai let or var ek jaise hai inhe change kar sakte hai or inme se koi ek hi use karna chaiye
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// jab varible ke declare kar dete hai or value nhi dete hai toh undefined aata hai

// alert(1 + 2) not use because we use node js not browser

// MDN and tc39 for doucmentation reads

/* DataTypes
numbers => 2 power 53
string => ""
bigint => bade numbers ke liye
boolean => true/false
null => standalone value koi value nhi hai
undefined => koi value nhi di hai

object
null => typeof null is object
undefined => undefined
*/