//   class and objects
//  ****************** this ***********************
// const student = {
//     fullname : "harshit nehra",
//     marks : 94.3,
//     printmarks: ()=> {
//         console.log("marks = ", this.fullname);
//     }
// }
// student.printmarks()
// console.log(student.fullname);
//  ******************* __proto__ *********************
// const employee = {
//     company : "google",
//     calctax(){
//         console.log("tex is 10 persent");
        
//     }
// }

// const harshit = {
//     salery : 1200000,
//     language : "python",
//     name(){
//         console.log(`my salery is ${this.salery} ${this.company} ${this.calctax}`);
        
//     }
// }

// harshit.__proto__ = employee

// console.log(harshit.name());
// ****************** classs *************************
// class toytacar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setbrand(brand){
//         this.brand = brand
//     }
// }

// let fortunar = new toytacar();
// console.log(fortunar);
// ****************** inheritance in js****************

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }

//     hllo(){
//         console.log("hello");
//     }
//   }
//   class car2 extends Car{
//     hllo2(){
//         console.log(`${this.name}`);
        
//     }
    
//   }
  
//   const myCar1 = new car2("Ford");
// //   const myCar2 = new Car("Audi", 2019);
  
// console.log(myCar1);



// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
//   const myCar = new Model("Ford", "Mustang");
//   console.log(myCar.show());
  
// *******************************

  const employee ={
    caltax() {
      console.log("tax is 10%");
      
    },
  }

  const karan = {
    salery :5000000000,
    company : "google"
  }

console.log(karan.__proto__ = employee);

