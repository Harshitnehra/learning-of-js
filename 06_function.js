function sum(num1 , num2){
    return num1 + num2
    // console.log(num1+ num2);
    
}



let a = sum(11241,1000)
// console.log(a);

function login(name){
if(name === undefined){
    console.log("enter name");
    return
}
return `${name} is a good boy`
}

// console.log(login("harshit"));

// function cartprise(...num1){
//     return num1
// }
// console.log(typeof(cartprise(123,123,23)));







//   funcion in odjects


const user = {
    username: "harshit",
    price: "111"
}

function handleobjects(objects){
    // console.log(`${objects.username} is a good boy ${objects.price}`);
    
}
// handleobjects(user)
// console.log(handleobjects({username:"siddharth", price:"23"}));



//      function in array

const newarrey = [1,2,3,4,5,6,7,8]
const arrey = [100,2000,300,400,500,60,700,800]
function harshit(typearrey){
    // console.log(typearrey[2]);
    
}
harshit(arrey)
// +++++++++++++++++++++Aerro function++++++++++++++++++++++++

let nameuser  = {
    name : "harshit",
    pass: "234",
    massfunction:  function(){
        // console.log(`${this.name} is agood boy`);
    }
}
// console.log(nameuser);

// nameuser.massfunction()
nameuser.name = "siddhath"
// nameuser.massfunction()
// console.log(nameuser);
// console.log(this);
function chai(){
    let har = "sdfsgfhgf"
    // console.log(this.har);
    
}
// chai()

const func  = ()=> {
    let har = "sdfsgfhgf"
    // console.log(this);
}
// func()

const addtwo  = (n1 , n2) => {
    return n1 + n2
}

// console.log(addtwo(1,2));
hello = (a1 ,a2) => a1 +a2;
// console.log(hello(1,3));
console.log(true+ 3)
