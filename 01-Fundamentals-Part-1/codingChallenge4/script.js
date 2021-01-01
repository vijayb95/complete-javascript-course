const billValue = 430;

let tip = billValue >= 50 && billValue <= 300 ? (billValue / 100) * 15 : (billValue / 100) * 20

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)