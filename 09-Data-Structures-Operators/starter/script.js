'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(start, main) {
    return [this.starterMenu[start], this.mainMenu[main]];
  },

  openingHours,
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}

console.log(restaurant.openingHours?.fri?.open); //optional chaining

//LOOPING OBJECTS, KEYS AND ENTRIES
console.log(Object.values(openingHours));
for (const day of Object.keys(openingHours)) console.log(day);

const entries = Object.entries(openingHours);
console.log(...entries[0]);
// [key, { open, close }]
for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`on ${key} open at ${open} and close at ${close}`);
}

//SETS
const orderSet = new Set(['Vada', 'Bonda', 'Bonda', 'Idly', 'Vada']);
console.log(orderSet); //Set remove duplicates
console.log(orderSet.size);
console.log(orderSet.has('Idly'));
orderSet.add('Bajji');
orderSet.add('Bajji');
orderSet.delete('Bonda');
//orderSet.clear()
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Janitor'];
const staffUnique = [...new Set(staff)]; //taking unique staffs into Set and using spread operator to put it in array
console.log(staffUnique);

//MAPS
const rest = new Map();
rest.set('name', 'Jay Biryani');
rest.set(1, 'Chennai, TN');
console.log(rest.set(2, 'Bangalore, Mysore'));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

//MAP ITERATIONS
const question = new Map([
  ['question', 'Best programming language?'],
  [1, 'Python'],
  [2, 'JS'],
  ['Correct'],
  [true, 'Correct'],
  [false, 'Try Again!'],
]);
console.log(question);

//Convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// const answer = Number(prompt('Your Amswer?'));
const answer = 1;
for (const [key, value] of question) {
  if (key === answer) {
    console.log(`Answer ${key}: ${value}`);
  }
}
//convert map to array
console.log([...question]);
console.log([...question.keys()]);

//STRINGS
const airline = 'Air India';
let plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('India'));

console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMidSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`its a middle seat`);
  } else {
    console.log('You got lucky');
  }
};
checkMidSeat('11B');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix passenger capitalization
const passenger = 'vIjaY';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = 'hello@jay.io';
const loginEmail = ' Hello@Jay.IO \n';

const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);

//replacing
const priceGB = '286,98E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Part of NEW Airbus series');
}

//Split
console.log('a+very+nice+string'.split('+'));
console.log('Jay B'.split(' '));

const [firstName, lastName] = 'Jay B'.split(' ');
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jay'.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4321567890341234));
console.log(maskCreditCard(64732156789034));

//repeat
const message2 = 'Bad Weather... All departures delayed...';
console.log(message2.repeat(5));
