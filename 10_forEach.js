// fruits= [1, {
//     language : "js",
//     price : "99"
//   },2,3,4,5,6,7,8]

// fruits.forEach (function(value, key, arr) {
// console.log(   arr.language)
  // })

// const code = [
//   {
//   language : "js",
//   price : "99"
// },
// {
//   language : "js",
//   price : "99"
// },{
//   language : "js",
//   price : "99"
// },{
//   language : "js",
//   price : "99"
// },
// ]
// code.forEach( (item, index , arr)=> {
// console.log(item.language);
// // console.log(index);
// // console.log(arr);

// }) 




// const ages = [32, 33, 16, 40];
//  ages.forEach( (item) => {console.log(item > 35 );
//    ;
//   ;
// }

// // );
// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// console.log(array1);



let current = (birthyear) => {
  if(birthyear > "2024"){
    console.log("enter a valid age");
  }
  console.log(`your age is ${2024 - birthyear}`);
  
}
current("1998")