for (let index = 0; index < 10; index++) {
    //  console.log(`table of ${index}`);
     for (let j = 0; j < 10; j++) {
        // console.log(`${index} * ${j} = ${index * j}`);
        
     }
     
}

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
  
//   console.log(cars[i])
// }

let arr = 0
// while (arr < cars.length) {
//     console.log(cars[arr]);
//     arr++
// } 

do {
    // console.log(arr);
    arr++
    
} while(arr > 10);

// let number = {
//     harshit: "nehra",
//     reenu: "jaat",
//     shinu: "solate"
// }
for (const element of Object.entries(number)) {
    if (Object.keys(number) == "reenu") {
        continue
    }
    // console.log(element);
    
}

const map1 = new Map();

map1.set('a', 1);
map1.set("a",4)
map1.set('b', 2);
map1.set('c', 3);

// console.log(map1);
// Expected output: 1

map1.set('a', 97);

// console.log(map1.get('a'));
// Expected output: 97

// console.log(map1.size);
// Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// Expected output: 2


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // List all Entries
  let text = "";
  fruits.forEach (function(value, key) {
//    console.log( key + ' = ' + value);
  })



 