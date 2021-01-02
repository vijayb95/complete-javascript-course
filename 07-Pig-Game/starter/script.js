'use strict';

let currentPlayer = 0;
let current = 0;
let p1Score = 0;
let p2Score = 0;

let player1Score = document.querySelector('#score--0');
let player2Score = document.querySelector('#score--1');

let player1Current = document.querySelector('#current--0');
let player2Current = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const newGame = document.querySelector('.btn--new');

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

dice.classList.add('hidden');

const newMatch = function () {
  dice.classList.add('hidden');
  currentPlayer = 0;
  current = 0;
  p1Score = 0;
  p2Score = 0;
  switchActive(0);
  player2Score.textContent = p2Score;
  player2Current.textContent = current;
  document.querySelector('#name--0').classList.remove('player--winner');
  document.querySelector('#name--1').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
};

const updateCurrent = function () {
  if (currentPlayer % 2 === 0) {
    player1Current.textContent = current;
  } else {
    player2Current.textContent = current;
  }
};

const switchActive = function (n) {
  if (n === 1) {
    if (currentPlayer % 2 === 0) {
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    } else {
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
  } else {
    if (currentPlayer % 2 === 0) {
      p1Score += current;
      player1Score.textContent = p1Score;
      player1Current.textContent = current;
      switchActive(1);
      return p1Score;
    } else {
      p2Score += current;
      player2Score.textContent = p2Score;
      player2Current.textContent = current;
      switchActive(1);
      return p2Score;
    }
  }
};

rollDice.addEventListener('click', function () {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice);
  dice.src = `dice-${randomDice}.png`;
  dice.classList.remove('hidden');
  current += randomDice;
  if (randomDice === 1) {
    current = 0;
    updateCurrent();
    switchActive(1);
    currentPlayer++;
  }
  updateCurrent();
});

hold.addEventListener('click', function () {
  let currentTotal = switchActive(0);
  if (currentTotal > 99) {
    if (currentPlayer % 2 === 0) {
      document.querySelector('#name--0').classList.add('player--winner');
    } else {
      document.querySelector('#name--1').classList.add('player--winner');
    }
  }
  current = 0;
  updateCurrent();
  currentPlayer++;
});

newGame.addEventListener('click', newMatch);
