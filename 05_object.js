// const tinderuser = new Object()

const tinderuser = {}
tinderuser.name = "reenu"
tinderuser.surname = "nehra"
tinderuser.id = "12345678"
tinderuser.adderse = "rewari"
// console.log(tinderuser);

let username = {
    user : "siddharth",
    surname : {
        name : "jaat",
        sur : "nehra",
        login : {
            yes: "nhi"
        }
    }
}

// console.log(username.cvbnbv?.surname.login);
// console.log(tinderuser);
let  a= Object.values(tinderuser)
let  b= Object.entries(tinderuser)
// console.log(b);
// console.log(typeof(a));


cource = {
    name : "javascript",
    price: "999",
    courceIncesctor: "harshit"
}

const {courceIncesctor : dds} = cource
console.log(cource.name);

