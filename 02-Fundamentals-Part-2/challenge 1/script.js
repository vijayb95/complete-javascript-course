'use strict';

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3

//DATA 1
let dolphinsAvg = calcAvg(44, 23, 71)
let koalasAvg = calcAvg(65, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win!!🏆 (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win!!🏆 (${avgKoalas} vs ${avgDolphins})`)
    }
    else {
        console.log("No one WON....")
    }
}

checkWinner(dolphinsAvg, koalasAvg)

//DATA 2
dolphinsAvg = calcAvg(85, 54, 41)
koalasAvg = calcAvg(23, 34, 27)

checkWinner(dolphinsAvg, koalasAvg)