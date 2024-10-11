const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    "har shit": "nehra",
    "harshit": "sidddharth"
  };

//   console.log(person.firstName);
//   console.log(person["firstName"]);
//   console.log(person["har shit"]);
//   console.log(person.harshit);
// Object.freeze(person)
person.age = "890"
person.cast = "jaat"
  person.greeting = function(){
    console.log("siddharthhappybirthday");
  }

//   console.log(person.greeting)
//   console.log(person.greeting());
//   console.log(person);
//   console.log(person.cast);

const personName = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  personName.greeting = function(){
    console.log(`harshit nehra ${this.lastName}`);
  }
// console.log(personName);
console.log(personName.greeting());
//   console.log(`harshit nehra ${this.age}`);


