let a = ["harshit", "nehra", "jaat"]
let b = ["harssiddharthhit", "kutha", "jaat"]
// a.push(b)
const c = a.concat(b)
// console.log(a[3][0]);
// console.log(a);
let d = [...a, ...b]
// console.log(c);
// console.log(d);


let e = [1,2,3,4,[1,2,3,4,5,6,[2,3,4,5,[6,7,8],6,7,8]]]
let f = e.flat(Infinity )
// console.log(f);
const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
// console.log(newArr);


console.log(Array.isArray("jvljdfbvljfd"));
console.log(Array.from("jvljdfbvljfd"));
console.log(Array.of(a ,b));
console.log(Array.from({name: "siddharth"}));