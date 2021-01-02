// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const data = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  return str + `...`;
};

console.log(printForecast(data));
