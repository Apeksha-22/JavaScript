//<-------------------------------------------Array in Javascript--------------------------------------------------->

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(typeof myArr2);

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() => join array ko bind mein convert karta hai or string mein conver kar deta hai

// console.log(myArr); => [0, 1, 2, 3, 4, 5]
// console.log( newArr); => 0,1,2,3,4,5
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


/* slice mein last given index include nhi karta hai or oringinal array mein bhi changes nhi karta hai 
    splice mein last given index ko inlcude karta hai or original array ko bhi change kar deta hai mtlb original wale mein
    se splice array ya element ko remove kar deta hai
 */










//<--------------------------------------Array part 2 in Javascript------------------------------------------->

    const marvel_heros = ["thor", "Ironman", "spiderman"]
    const dc_heros = ["superman", "flash", "batman"]
    
    // marvel_heros.push(dc_heros)
    
    // console.log(marvel_heros);
    // console.log(marvel_heros[3][1]);
    
    // const allHeros = marvel_heros.concat(dc_heros)
    // console.log(allHeros);
    
    const all_new_heros = [...marvel_heros, ...dc_heros]
    
    // console.log(all_new_heros);
    
    const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
    
    const real_another_array = another_array.flat(Infinity)
    console.log(real_another_array);
    
    
    
    console.log(Array.isArray("Apeksha"))
    console.log(Array.from("Apeksha"))
    console.log(Array.from({name: "Apeksha"})) // interesting
    
    let score1 = 100
    let score2 = 200
    let score3 = 300
    
    console.log(Array.of(score1, score2, score3));





//<----------------------------------------------Objects in depth--------------------------------------------------------->

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

/* jab symbol ko key le kar opuput mien print karana hai tb phle symbol ko define karna hoga fir 
object mein correct syntax [] ka use kar ke use access kar sake hai value mein koi change nhi aayega
mger jb typeof chack akrege tb pta chlega*/
const JsUser = {
    name: "Hitesh",
    "full name": "Apeksha Jain",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "apeksha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "apeksha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "apeksha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());