// // console.log(a)
// // var a = 10

// // console.log(s)
// // let s = 10

// // function hosting
// // sayHello();

// // function sayHello() {
// //   console.log("Hello");
// // }

// // sayhi()
// //  var sayhi = function(){
// //   console.log("sayhi");
// // }

// // sayhi()

// const a = 1;

// function outer() {
//   console.log(a);
//   // var a = 2;
// }

// outer();
// const numbers = [5, 10, 15];

// console.log(...numbers);
function sum(a, ...numbers) {
  console.log(a , numbers);
}

sum(1, 2, 3, 4);


const arr = [1, 2, 3];

const result = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);

console.log(result);
