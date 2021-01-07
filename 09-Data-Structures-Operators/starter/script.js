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

//LOOPING OBJECTS< KEYS AND ENTRIES
console.log(Object.values(openingHours));
for (const day of Object.keys(openingHours)) console.log(day);

const entries = Object.entries(openingHours);
console.log(...entries[0]);
// [key, { open, close }]
for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`on ${key} open at ${open} and close at ${close}`);
}
