'use strict';

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create methods or functions inside objects
  //   this.calcAge = () => console.log(2037 - this.birthYear);
};

const jay = new Person('Jay', 1994);
console.log(jay);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically returns {}

const haripria = new Person('Haripria', 1995);
const vijay = new Person('vijay', 1995);
console.log(haripria, vijay);

console.log(jay instanceof Person);

//Prototypes
console.log(Person.prototype);

//Always use prototypes to create methods inside objects
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jay.calcAge();
haripria.calcAge();

Person.prototype.species = 'Humans';

console.log(jay.hasOwnProperty('firstName'));
console.log(jay.hasOwnProperty('species'));

console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__); //Returns null because it looks at Object.prototype

const arr = [3, 6, 4, 2, 0, 7, 2, 8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//Adding a new function to the built-in array prototype. just an example, not a good practice to override built in prototypes
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1997);
console.log(jessica);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

////////////////////////
//Getters and setters

const account = {
  owner: 'jonas',
  movements: [200, 700, 123],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

//////////////////
//static methods
console.log(Array.from(document.querySelectorAll('h1'))); //frp, os attached to array constructor
