//<--------------------------------------functions in js ----------------------------------------------->

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));





//<----------------------------------------Scope in Js ----------------------------------------------->
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "apeksha"; // `username` ek local variable hai jo `one` function ke andar defined hai

    function two() {
        const website = "youtube"; // `website` ek local variable hai jo `two` function ke andar defined hai
        console.log(username); // `username` ko access kiya ja raha hai (closure ke through)
    }
    
    // console.log(website);Yeh line error degi agar uncomment kiya, kyunki `website` sirf `two` function ke andar accessible hai.

    two(); // `two` function ko call kar rahe hain
}

one(); // `one` function call kiya


if (true) {
    const username = "apeksha"
    if (username === "apeksha") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//scope browser or node ke through use karna dono alag alag hai


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5) 
// yha hum function ko varible mein declare kar rhe hai jis se function call phle nhi ho sakta hai kuch functions
//ko call declaration ke baad kiya jata hai
const addTwo = function(num){
    return num + 2
}





//<--------------------------------THIS and Arrow Function ------------------------------------>


//browser ke andher window global scope hota hai or node mein empty object global scope hota hai

const user_ = {
    username: "apeksha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user_.welcomeMessage()
// user_.username = "sam"
// user_.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "apeksha"
//     console.log(this.username); => function ke andher this ka is trah se use nhi kar sakte hai undefined aayega
// }

// chai()

// const chai = function () {
//     let username = "apeksha"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "apeksha"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const AddTwo = (num1, num2) => ({username: "apeksha"}) // object ko return karne ke liye paranthesis mein bracs ke sath likhna hota hai


console.log(AddTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()







/* 1. Global Context Mein
Agar this ko directly global scope mein use kiya jaye:

Browser Environment: this global window object ko refer karega.
Node.js Environment: this global object (global) ko refer karega, par strict mode mein undefined hota hai. */

console.log(this); // Browser mein: window, Node.js mein: global object

function show() {
    console.log(this); // Browser mein: window
}
show();






// Strict Mode:
// Agar strict mode enabled hai, toh this undefined ho jata hai:

"use strict";
console.log(this); // undefined

function show() {
    console.log(this); // undefined
}
show();








// 2. Object Ke Context Mein
// Jab this ko ek object ke method mein use kiya jata hai, tab this us object ko refer karta hai.
const obj = {
    name: "Apeksha",
    greet: function () {
        console.log(this.name); // "Apeksha"
    },
};
obj.greet();








// 3. Constructor Functions Mein
// Jab this ko ek constructor function ke andar use kiya jata hai, toh yeh us nayi object ko refer karta hai jo create ho rahi hai.

function Person(name) {
    this.name = name; // `this` naye object ko point karega
}

const person1 = new Person("Apeksha");
console.log(person1.name); // "Apeksha"








// 4. Class Ke Andar
// ES6 classes mein, this class ke instance ko refer karta hai.

class User {
    constructor(name) {
        this.name = name; // `this` current object instance ko refer karega
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const user1 = new User("Apeksha");
user1.greet(); // "Hello, Apeksha"






// 5. Arrow Functions Mein
// Arrow functions mein this lexical scope se inherit hota hai, yani jis scope mein arrow function defined hai, uska this use hoga.

const obj1 = {
    name: "Apeksha",
    greet: function () {
        const arrowFn = () => {
            console.log(this.name); // `this` obj ko refer karega
        };
        arrowFn();
    },
};
obj1.greet();






// Arrow Function vs Regular Function:
function Regular() {
    console.log(this); // Depends on how the function is called
}

const Arrow = () => {
    console.log(this); // Lexical `this` (inherits from surrounding scope)
};

Regular(); // Global context: window or undefined (in strict mode)
Arrow(); // Lexical context: Same as the parent scope







// 6. Event Listeners Mein
// Event listeners mein, this usually us element ko refer karta hai jo event trigger kar raha hai.

// document.querySelector("button").addEventListener("click", function () {
//     console.log(this); // Button element
// });





// Arrow Function Ke Saath: Arrow function mein lexical this use hota hai:
// document.querySelector("button").addEventListener("click", () => {
//     console.log(this); // Lexical `this` (window in this case)
// });







// 7. Call, Apply, and Bind
// this ka value explicitly set karne ke liye call, apply, aur bind ka use hota hai.


// Call:
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const user2 = { name: "Apeksha" };
greet.call(user2, "Hello"); // "Hello, Apeksha"



// Apply:
greet.apply(user2, ["Hi"]); // "Hi, Apeksha"



// Bind:
const boundGreet = greet.bind(user2);
boundGreet("Hey"); // "Hey, Apeksha"




// 8. DOM Manipulation Mein
// DOM elements ke saath kaam karte waqt, this current DOM element ko refer karta hai:

// document.querySelector("#btn").addEventListener("click", function () {
//     console.log(this.id); // "btn"
// });





// 9. Implicit vs Explicit Binding
// Implicit Binding: Method ke call ke waqt, this us object ko refer karega jo method ko call kar raha hai:

const User3 = {
    name: "Apeksha",
    greet() {
        console.log(this.name); // "Apeksha"
    },
};
User3.greet();


//Explicit Binding: call, apply, aur bind ka use karke this ko bind kiya jata hai.



/*10. Default Context
Agar this ko kisi bhi special context ke bina call kiya jata hai, toh:

Non-strict mode: this global object ko refer karega.
Strict mode: this undefined hoga.
*/








//<-----------Immediately Invoked Function Expressions IIFE ---------------->


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
