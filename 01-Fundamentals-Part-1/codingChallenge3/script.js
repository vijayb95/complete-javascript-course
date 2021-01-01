const dolphinScore1 = Number(prompt(`Enter Dolphin's Score1`))
const dolphinScore2 = Number(prompt(`Enter Dolphin's Score2`))
const dolphinScore3 = Number(prompt(`Enter Dolphin's Score3`))

const koalasScore1 = Number(prompt(`Enter Koalas Score1`))
const koalasScore2 = Number(prompt(`Enter Koalas Score2`))
const koalasScore3 = Number(prompt(`Enter Koalas Score3`))

const dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
const kolasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3

if ((dolphinAvg > kolasAvg) & dolphinAvg >= 100) {
    console.log(`Dolphin has won the game with a Average of ${dolphinAvg}.`)
} else if ((kolasAvg > dolphinAvg) & kolasAvg >= 100) {
    console.log(`Koalas has won the game with a Average of ${kolasAvg}.`)
} else if ((kolasAvg === dolphinAvg) & kolasAvg >= 100) {
    console.log(`The match is a DRAW.`)
} else if ((kolasAvg === dolphinAvg) & kolasAvg < 100) {
    console.log(`No one won the match.`)
}