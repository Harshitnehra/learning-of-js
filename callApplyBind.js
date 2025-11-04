// JavaScript ke call(), apply(), aur bind()
// Yeh teen important methods JavaScript ke functions ke saath use hote hain taaki hum function ke andar this ka context (yaani kis object ko refer karega) control kar sakein.


// 🔹 1️⃣ call() Method

// Definition:
// call() ka use kisi function ko immediately call karne ke liye hota hai,
// aur hum this ka context manually set kar sakte hain.

// Syntax:

// functionName.call(thisArg, arg1, arg2, ...)

function name() {
    return "hello" + this.params
}

const obj = { params : "sdhjbslkj"}

console.log(name.call(obj));

// example 2
const callfunction = {
    name : "harshit",
    greet : function (city, country) {
        console.log("my name is " + this.name + "i live in" + " "+ city + country);
        
    }
}

const nehra = {name : "siddharth"}

callfunction.greet.call(nehra , "rewari" , "hravana")