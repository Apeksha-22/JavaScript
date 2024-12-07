console.log("Apeksha-Jain");
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//<----------------------------------------------let, const , var------------------------------------------------------------>


// js phle scope ke basics ko nhi janta tha 
// prefer not to use var because of issue in block scope and function scope



const accountId = 133789
let accountEmail = "abcd@1234.com"
var accountPassword = "1297676465"
accountCity = "Jaipur"
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);




//const ke varible ko change nhi kar sakte hai let or var ek jaise hai inhe change kar sakte hai
// or inme se koi ek hi use karna chaiye or ek symbol bhi hota hai jo uniqueness ko represent karta hai

// jab varible ke declare kar dete hai or value nhi dete hai toh undefined aata hai

// alert(1 + 2) not use because we use node js not browser

// MDN and tc39 for doucmentation reads




//<-----------------------------------------DataType and ECMA Standard-------------------------------------------------->

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Apeksha")




/* DataTypes
numbers => 2 power 53
string => ""
bigint => bade numbers ke liye
boolean => true/false
null => standalone value koi value nhi hai
undefined => koi value nhi di hai
symbol => unique


object
null => typeof null is object
undefined => undefined
*/



//<----------------------------------------Datatype conversion confusion---------------------------------------------->


// let score = 123

// console.log(typeof score);
// console.log(typeof (score));

// score = "123abc"
// console.log(typeof score);
// let val = Number(score);
// console.log(typeof val);
// console.log(val);




// val is NaN 
/* kbhi kbhi string mein num + char bhi daal dete hai or use number mein convert karte hai
toh vo convert toh ho jayega per actual mein check karege toh vo valid num mein change nhi hoga 
toh vo NaN show krayega
*/

/* 33(string) => 33(number)
    33abc => NaN
    undefined => NaN
    null => 0
    1 => true
*/



// let num = undefined
// let num2 = Boolean(num);
// console.log(num2);



/* 1 => true
    null=> false
    string => true
    undefined => false
    empty string => false
*/



let num = 2;
let num3 = (num);
console.log(num3);



//<---------------------------------Why string to number conversion is confusing----------------------------------------->


/* 2 strings ko add kar sakte hai per subtract  nhi or kisi ek num ko string ke sath add kar rhe hai toh string jaisa hi
  output aaye ga likin phle 2-3 numbers ko add kar rhe ho fir string add kar rhe ho toh phle addititon perform hoga
  fir string ke sath judh jayega likin ager phle string likh rhe hai fir number toh string ke jaisa ek sath pura output aa jayega

example
  console.log("1" + 2) => 12
  console.log("1" + 2 + 3) => 123
  console.log(1 + "2") => 12
  console.log("1" + "2") => 12
  console.log(1 + 2 + "3") => 33
 */

  console.log("1" + 2)
  console.log("1" + 2 + 3)
  console.log(1 + "2")
  console.log("1" + "2")
  console.log(1 + 2 + "3")
  console.log(+true);
  //console.log(true+); error throw
  
//<----------------------------------Comparison of datatypes in javascript------------------------------------------->


// console.log("02" > 2);           =>false
// console.log(3 > "2");            =>true
// console.log(null > 0);           =>false
// console.log(null >= 0);          =>true
// console.log(null < 0);           =>false
// console.log(undefined > 0);      =>false
// console.log(undefined < 0);      =>false
// console.log("02" === 2);         =>false

// null kbhi 0 mein convert hota ha kbhi NaN mein isi wajah se (3) false or (4) true hai or (1) wala 2,2 se greater nhi hai isliye
// or === (triple equal aate hai toh dataType bhi check karta hai)




//<----------------------------------------Data types of javascript summary-------------------------------------------------->


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt






const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n







// Reference (Non primitive)

// Array, Objects, Functions





const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Apeksha",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);




// https://262.ecma-international.org/5.1/#sec-11.4.3






//<----------------------------------------Stack and Heap meomory---------------------------------------------------->


// stack mein data ki copy li jati hai fir operation perform hota hai or heap mein original data per operation perform 
// hota hai or primitive dataType stack memory ka use karte hai or non-primitve dataType heap memory ka use karte hai


let num1 = 123;
let num2 = num1;
console.log(num2);
num2 = 456;
console.log(num2);
console.log(num1);


let userOne = {
    userName : "Abc",
    userEmail : "abc@google.com"
}

let userTwo = userOne;
userTwo.userEmail = "xyz@google.com"
console.log(userOne);
console.log(userTwo);





//<------------------------------------------Strings in Javascript ------------------------------------------------->

const name = "Apeksha"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Apeksha-aj-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Apeksha    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




// charAt(index) => Ek specific index par character return karta hai.

const str = "Hello";
console.log(str.charAt(1)); // "e"






// charCodeAt(index) => Ek specific index par character ka Unicode value return karta hai.
console.log("A".charCodeAt(0)); // 65







// concat(string2, string3, ...) => Strings ko concatenate karta hai.
console.log("Hello".concat(" ", "World")); // "Hello World"







// includes(searchString, position) => Check karta hai ki ek substring diya gaya string mein exist karta hai ya nahi.
console.log("Hello World".includes("World")); // true






// indexOf(searchValue, fromIndex) => Ek substring ki first occurrence ka index return karta hai.
console.log("Hello World".indexOf("World")); // 6






// lastIndexOf(searchValue, fromIndex) => Ek substring ki last occurrence ka index return karta hai.
console.log("Hello World Hello".lastIndexOf("Hello")); // 12







// match(regex) => Regular expression ke against matches return karta hai.
console.log("abc123".match(/\d+/)); // ["123"]





// replace(searchValue, replaceValue) => Ek substring ko replace karta hai.
console.log("Hello World".replace("World", "JavaScript")); // "Hello JavaScript"






// replaceAll(searchValue, replaceValue) => Saari occurrences ko replace karta hai.
console.log("abc abc abc".replaceAll("abc", "xyz")); // "xyz xyz xyz"






// slice(startIndex, endIndex) => Ek substring ko return karta hai.
console.log("Hello World".slice(0, 5)); // "Hello"







// split(separator, limit) => Ek string ko divide karke ek array banata hai.
console.log("a,b,c".split(",")); // ["a", "b", "c"]






// startsWith(searchString, position) => Check karta hai ki string ek specific substring se start hota hai ya nahi.
console.log("Hello World".startsWith("Hello")); // true







// endsWith(searchString, position) => Check karta hai ki string ek specific substring par end hota hai ya nahi.
console.log("Hello World".endsWith("World")); // true












// substring(startIndex, endIndex) => Ek substring return karta hai (negative indices ko allow nahi karta).
console.log("Hello World".substring(0, 5)); // "Hello"








// toLowerCase() => String ko lowercase mein convert karta hai.
console.log("HELLO".toLowerCase()); // "hello"







// toUpperCase() => String ko uppercase mein convert karta hai.
console.log("hello".toUpperCase()); // "HELLO"







// trim() => Leading aur trailing white spaces ko remove karta hai.
console.log("  Hello World  ".trim()); // "Hello World"







// trimStart() / trimEnd() => Start ya end ke white spaces ko remove karta hai.
console.log("  Hello".trimStart()); // "Hello"
console.log("World  ".trimEnd());   // "World"







// padStart(targetLength, padString) => String ke start mein characters add karta hai jab tak target length achieve na ho.
console.log("5".padStart(3, "0")); // "005"






// padEnd(targetLength, padString)=> String ke end mein characters add karta hai jab tak target length achieve na ho.
console.log("5".padEnd(3, "0")); // "500"






// valueOf() => Ek string object ka primitive value return karta hai.
console.log("Hello".valueOf()); // "Hello"







// toString() => String ka ek representation return karta hai.

console.log("Hello".toString()); // "Hello"








//<-----------------------------------Number and Maths in Javascript-------------------------------------------------->
const score_ = 400
// console.log(score_);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); => 5     "ceil" mein upper value li jati hai decimal hone per bhi
// console.log(Math.floor(4.9)); =>4    "floor" mein lower value li jati hai decimal hone per bhi
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// random mein value 0 to 1 ki beech ki vlaue hoti hai likin aalag-alag hoti hai fixed nhi hoti hai or randomly li jati hai
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/* jab hume min or max define kiya jata hai tb hum random value mein "max-min" ka multiply kar dete hai kyu hume min or max ki 
range mein value chaiye hoti hai isliye or plus 1 isliye kiya jise zero naa aa jaye or yha humara min 10 hai toh hume 10 se upper
value chaiye toh humne min ko bhi last mein add kar diya
 */







//<-----------------------------------------Date and time in depth in javascript------------------------------------------>
// Dates

let myDate = new Date()
// console.log(myDate.toString());                      => Sat Dec 07 2024 15:01:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());                  => Sat Dec 07 2024
// console.log(myDate.toLocaleString());                => 12/7/2024, 3:01:43 PM
// console.log(myDate.toISOString());                   => 2024-12-07T15:01:43.383Z
// console.log(myDate.toJSON());                        => 2024-12-07T15:01:43.383Z
// console.log(myDate.toLocaleDateString('en-IN'));     => 7/12/2024
// console.log(myDate.toLocaleTimeString('en-IN'));     => 3:01:43 pm
// console.log(myDate.toTimeString());                  => 15:01:43 GMT+0000 (Coordinated Universal Time) 
// console.log(myDate.toUTCString());                   => Sat, 07 Dec 2024 15:01:43 GMT
// console.log(typeof myDate); => object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     dateStyle: "short",
//     weekday: "long",
    
// })
