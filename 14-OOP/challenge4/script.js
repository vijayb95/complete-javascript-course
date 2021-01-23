'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the '#charge' property private;
3. Implement the ability to chain the 'accelerate' and '#chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a #charge of 23%

GOOD LUCK 😀
*/

class Carcl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.name} going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.name} going at ${this.speed} km/h`);
    return this;
  }
}

class EVcl extends Carcl {
  #charge;
  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.name} going at ${this.speed}, with a #charge of ${this.#charge}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVcl('Rivian', 120, 23);

console.log(rivian);

rivian.accelerate().accelerate().brake().chargeBattery(100).accelerate();
