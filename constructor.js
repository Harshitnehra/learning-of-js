function Person(name, age) {
    // Assign properties to the object being created
    this.name = name;
    this.age = age;
  
    // Method to greet
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Creating instances of Person
  let person1 = new Person('Alice', 30);
  let person2 = new Person('Bob', 25);
  
  // Calling methods on the instances
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
  