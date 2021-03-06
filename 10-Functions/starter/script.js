'use strict';

//default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassesnger = 1,
  price = 999 * numPassesnger
) {
  const booking = {
    flightNum,
    numPassesnger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 2000);
createBooking('LH123', 6);
createBooking('LH123', undefined, 300);

//PASSBY VALUE VS PASSBY REFERENCE
const flight = 'LH123';
const jay = {
  name: 'vijay',
  passport: 247955855295,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //pass by value
  passenger.name = 'Mr. ' + passenger.name; //passby Reference
  //   if (passenger.passport === 247955855295) {
  //     alert('Checked In');
  //   } else {
  //     alert('Wrong Passport');
  //   }
};

checkIn(flight, jay); //passing jay reference

//FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
//Callback Fn
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order fn
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed by: ${fn.name}`);
  console.log(`Transformed String: ${fn(str)}`);
};

transformer('Js is best!', upperFirstWord);

transformer('Js is best!', oneWord);

//Returning Fn - Regular type
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//Returning Fn - Arrow type
// const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greet('Hey');
greetHey('Jay');
greetHey('vijay');

greet('Hello')('Noname');

//CALL AND APPLY METHODS
//call
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(238, 'Vijay B');
lufthansa.book(54, 'Jay B');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};
const book = lufthansa.book;

book.call(eurowings, 23, 'Sara');
console.log(eurowings);

const flightData = [583, 'George Cooper'];
//apply
book.apply(lufthansa, flightData);
console.log(lufthansa);

//call
book.call(eurowings, ...flightData);
console.log(eurowings);

//BIND METHOD
const bookEW = book.bind(eurowings);
const bookLH23 = book.bind(lufthansa, 25); //always booking for 25

bookEW(23, 'Vijay Balaji');
bookLH23('Vj Balaji');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //pointing this keyword using bing

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

//Partial application - challenge
// const addTax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// const addVAT = addTax(0.23);
// const addTAX2 = addTax(0.02);
// addVAT(100);
// addTAX2(100);

//IMMEDIATELY INVOKED FNs

const runOnce = function () {
  console.log(`This will not run again`);
};
runOnce();

(function () {
  console.log(`this will not execute again`);
})();

//CLOSURES
const secureBooking = function () {
  let passengerCount = 0; //will be a separate variable env in secureBooking execution context.

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//A function has access to the varibale Environment(VE) of the execution context in which it was created.
const booker = secureBooking(); // booker is created by secureBooking execution context, so it has access to the variables passengerCount. since the return value of secureBooking is a function, the variable name won't be restored once it is updated. it will continue to update.
booker(); // 1
booker(); // 2
booker(); // 3

console.dir(booker);

// MORE CLOSURES EXAMPLE
//Ex: 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//re-assigning f function
h();
f();

//Ex: 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; //This is priotity

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000; //It is least priority than closures
boardPassengers(180, 3);
