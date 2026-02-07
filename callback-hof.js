// function greet(name) {
//   console.log("Hello " + name);
// }

// const processUser = () => {
//   return harshit;
// }

// processUser(greet);

function muntiply(a) {
    return function (b) {
        return a * b
    }
}

const squar = muntiply(2)

console.log(squar(5));

const arr = [1,2,3,46]

const a = arr.map(arr =>{ 
    return arr * 4})

console.log(a);


function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

