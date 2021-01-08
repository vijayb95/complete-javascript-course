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
