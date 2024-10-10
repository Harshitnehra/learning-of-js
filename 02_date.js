let newdate = new Date()
// console.log(newdate.toString());
// console.log(newdate.toISOString());
// console.log(newdate.toLocaleDateString());
// console.log(newdate.toLocaleString());
// console.log(newdate.toLocaleTimeString());
// console.log(newdate.toTimeString());
// console.log(newdate.toUTCString());
// console.log(newdate.getTimezoneOffset());
console.log(typeof newdate);

console.log(newdate.toLocaleString({hour12 : ""}));