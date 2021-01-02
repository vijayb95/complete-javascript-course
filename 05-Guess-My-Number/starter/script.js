'use strict';

let score;
let hiddenNumber;
let highscore;

const initialState = function () {
  console.clear();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  hiddenNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  highscore = Number(document.querySelector('.highscore').textContent);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
};

const updateScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

initialState();

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);

  if (score < 1) {
    document.querySelector(
      '.message'
    ).textContent = `😥 You've lost the game... Try Again!`;
  } else {
    if (!((guessValue >= 1) & (guessValue <= 20))) {
      document.querySelector('.message').textContent =
        '⛔ Not a valid number!..';
      updateScore();
    } else {
      document.querySelector('.message').textContent = 'Start guessing...';
      console.log(guessValue);
      if (hiddenNumber === guessValue) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = hiddenNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number..';
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = score;
        }
        console.log(hiddenNumber, guessValue, 'Its a match');
      } else if (hiddenNumber > guessValue) {
        updateScore();
        document.querySelector('.message').textContent = '📉 Too Low..';
      } else if (hiddenNumber < guessValue) {
        updateScore();
        document.querySelector('.message').textContent = '📈 Too High..';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', initialState);
