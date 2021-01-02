const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.695,
    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

if (john.calcBmi() > mark.calcBmi()) {
    console.log(`${john.firstName} BMI(${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`)
} else {
    console.log(`${mark.firstName} BMI(${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`)
}