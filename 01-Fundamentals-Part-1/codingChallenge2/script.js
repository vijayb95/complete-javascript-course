let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 92;
let johnWeight = 1.95;

let isMarkHigherBMI;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnHeight / (johnWeight * johnWeight)

console.log(markBMI, johnBMI)

if (markBMI > johnBMI) {
    console.log(`Mark has the highest BMI than John: ${markBMI}`)
} else {
    console.log(`John has highest BMI than Mark: ${johnBMI}`)
}