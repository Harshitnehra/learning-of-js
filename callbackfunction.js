function muntby(num){
  return function (factor){
    return factor * num
  }
}

let double = muntby(3)

console.log(double(5));


function name(naam) {
  return "hello" + naam
}

function kyahai(params) {
  let naam = "harshit"
  console.log(params(naam));
  
}
kyahai(name)