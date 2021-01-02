"use strict";

// //FUNCTION
// function describeCountry(country, population, capitalCity) {
//   let out = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//   return out;
// }

// const india = describeCountry("India", 13.5, "New Delhi");
// const finland = describeCountry("Finland", 6, "Helsinki");
// const portugal = describeCountry("Portugal", 10, "Lisbon");

// console.log(india, finland, portugal);

// // FUNCTION DEC VS EXPRESSION
// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / worldPopulation) * 100;
// };

// const india = percentageOfWorld1(1350);
// const finland = percentageOfWorld1(6);
// const portugal = percentageOfWorld1(10);
// console.log(india, finland, portugal);

// const india1 = percentageOfWorld2(1550);
// const finland1 = percentageOfWorld2(60);
// const portugal1 = percentageOfWorld2(100);
// console.log(india1, finland1, portugal1);

// //ARROW FUNCTION
// const calcAge = (birthYear) => 2021 - birthYear;
// const age = calcAge(1994);
// console.log(age);

// //Nested Function
// const yearsUntilRetirement = (birthYear) => {
//   const age1 = calcAge(birthYear);
//   const retirement = 65 - age1;
//   return retirement;
// };
// console.log(yearsUntilRetirement(1994));

// //ARRAYS
// const countries = ["India", "China", "Finland", "Norway"];
// const populations = [130, 145, 10, 15];
// console.log(populations.length === 4);

// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// //Array Operations
// const neighbours = ["China", "Bhutan", "Nepal", "Sri Lanka", "Pakistan"];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// const chinaIndex = neighbours.indexOf("China");
// neighbours[chinaIndex] = "Republic of China";
// console.log(neighbours);

// //OBJECT
// const jay = {
//   firstName: "Vijay",
//   lastName: "B",
//   age: 1995 - 2021,
//   job: "Devaloper",
//   friends: ["Abdul", "Dharma"],
// };

// console.log(jay);

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   language: "Tamil",
//   neighbours: ["Bhutan", "China", "Nepal"],
// };
// console.log(myCountry);

// //DOT vs Bracket Notation
// const jay = {
//   firstName: "Vijay",
//   lastName: "B",
//   age: 1995 - 2021,
//   job: "Devaloper",
//   friends: ["Abdul", "Dharma"],
// };
// console.log(jay.job);
// console.log(jay["job"]);

// console.log(
//   `${jay.firstName} has ${jay.friends.length} friends, and his best friend is called ${jay.friends[0]}`
// );

// //OBJECT METHODS
// const jay = {
//   firstName: "Vijay",
//   lastName: "B",
//   birthYear: 1994,
//   job: "Devaloper",
//   friends: ["Abdul", "Dharma"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and ${
//       this.hasDriversLicense
//         ? `he has a drivers license.`
//         : `he doesn't have a drivers license.`
//     }`;
//   },
// };

// console.log(jay.getSummary());

// //For LOOP
// for (let count = 1; count < 51; count++) {
//   console.log(`Voter number ${count} is currently voting! 👨‍🔧`);
// }

// //LOOP ARRAYS, BREAKING AND CONTINUING
// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / worldPopulation) * 100;
// };
// const populations = [1350, 150, 2400];
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// for (let i = 0; i < populations.length; i++) {
//   if (percentages[i] === percentageOfWorld2(populations[i])) {
//     console.log(`Both are same`);
//   } else {
//     console.log(`These two aren't same`);
//   }
// }

//While loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights, REP: ${rep} 🏋️‍♀️`);
  rep++;
}
