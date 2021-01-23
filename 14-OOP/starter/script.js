'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create methods or functions inside objects
//   //   this.calcAge = () => console.log(2037 - this.birthYear);
// };

// const jay = new Person('Jay', 1994);
// console.log(jay);

// //1. New {} is created
// //2. function is called, this = {}
// //3. {} linked to prototype
// //4. function automatically returns {}

// const haripria = new Person('Haripria', 1995);
// const vijay = new Person('vijay', 1995);
// console.log(haripria, vijay);

// console.log(jay instanceof Person);

// //Prototypes
// console.log(Person.prototype);

// //Always use prototypes to create methods inside objects
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jay.calcAge();
// haripria.calcAge();

// Person.prototype.species = 'Humans';

// console.log(jay.hasOwnProperty('firstName'));
// console.log(jay.hasOwnProperty('species'));

// console.log(jay.__proto__);
// console.log(jay.__proto__.__proto__);
// console.log(jay.__proto__.__proto__.__proto__); //Returns null because it looks at Object.prototype

// const arr = [3, 6, 4, 2, 0, 7, 2, 8];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// //Adding a new function to the built-in array prototype. just an example, not a good practice to override built in prototypes
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// //class expression
// // const PersonCl = class{}

// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1997);
// console.log(jessica);
// jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// //Static method on object can't be called with instances
// Person.hey = function () {
//   console.log(`Hey there`);
// };
// Person.hey();

// //1. Classes are NOT hoisted
// //2. Classes are first-class citizens
// //3. Classes are executed in strict mode

// ////////////////////////
// //Getters and setters

// const account = {
//   owner: 'jonas',
//   movements: [200, 700, 123],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };

// //////////////////
// //static methods
// console.log(Array.from(document.querySelectorAll('h1'))); //from, os attached to array constructor

// /////////////////
// //Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.firstName = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1987);
// sarah.calcAge();

/////////////////
// //Inheritance between classes
// const Person = function (firstName, birthYear) {
//   // Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;

//   //To keep the code dry using 'call' function to inherit Person class
//   Person.call(this, firstName, birthYear);

//   this.course = course;
// };

// console.dir(Student.prototype.constructor);

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype); //Inheriting Person prototype to student
// console.dir(Student.prototype.constructor); //Points to person, since we use object.create and points it to person class
// Student.prototype.constructor = Student; //Pointing the constructor back to student class
// console.dir(Student.prototype.constructor);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2008, 'CS');
// console.log(mike);
// mike.calcAge();

// //////////////////
// //Inheritance between ES6 classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }
//   calcAge() {
//     console.log(`I'm ${2097 - this.birthYear}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2010, 'Bio Tech');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// ///////////////////////
// //Inheritance with object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2011, 'CS');
// jay.introduce();
// jay.calcAge();

// /////////////////////
// Another class example
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     //movements and pin is protected property now
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   //Public Interface
//   getMovements() {
//     this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`loan approved`);
//     }
//   }
// }

// const acc1 = new Account('Jay', 'EUR', 1111, []);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

// console.log(acc1);

////////////////////////
//Private Class Fields

//Public fields
//Private fields
//Public methods
//Private methods

class Account {
  //public fields (instances)
  locale = navigator.language;

  //Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //pin is a private fields initialized about and declared here
    this.#pin = pin;
    // this.#movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  //Public Interface: public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
    }
    return this;
  }

  //Private methods
  // #approveLoan(val) { //Not supported yet in chrome
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jay', 'EUR', 1111, []);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

// console.log(acc1.#movements); //Can't call it here since movements is declared private, '#' makes the property private

////////////////////////
//Chaining
acc1.deposit(300).deposit(100).withdraw(34).requestLoan(2500);
console.log(acc1.getMovements());
