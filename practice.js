function muntby(num){
  return function (factor){
    return factor * num
  }
}

let double = muntby(3)

console.log(double(5));


