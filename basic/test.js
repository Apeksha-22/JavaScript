console.log("Apeksha-Jain");


//<------------------------------------------------------------------------------------------------------------------------->
                                    // let, const , var




// js phle scope ke basics ko nhi janta tha 
// prefer not to use var because of issue in block scope and function scope



// const accountId = 133789
// let accountEmail = "abcd@1234.com"
// var accountPassword = "1297676465"
// accountCity = "Jaipur"
// let accountState;

// console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);




//const ke varible ko change nhi kar sakte hai let or var ek jaise hai inhe change kar sakte hai
// or inme se koi ek hi use karna chaiye or ek symbol bhi hota hai jo uniqueness ko represent karta hai

// jab varible ke declare kar dete hai or value nhi dete hai toh undefined aata hai

// alert(1 + 2) not use because we use node js not browser

// MDN and tc39 for doucmentation reads




//<----------------------------------------------------------------------------------------------------------------------->
                        //DataType and ECMA Standard




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



//<-------------------------------------------------------------------------------------------------------------------------->
                                    //Datatype conversion confusion




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



// let num = 2;
// let num2 = (num);
// console.log(num2);



//<------------------------------------------------------------------------------------------------------------------------->
                            // Why string to number conversion is confusing





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

//   console.log("1" + 2)
//   console.log("1" + 2 + 3)
//   console.log(1 + "2")
//   console.log("1" + "2")
//   console.log(1 + 2 + "3")
//   console.log(+true);
  //console.log(true+); error throw
  
//<------------------------------------------------------------------------------------------------------------------------>
                            //Comparison of datatypes in javascript





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




//<----------------------------------------------------------------------------------------------------------------------->
                            //Data types of javascript summary





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
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
