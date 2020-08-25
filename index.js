let player1Score = 0;
let player2Score = 0;

let player1Turn = true;

let player1Dice = document.getElementById('player1Dice');
let player2Dice = document.getElementById('player2Dice');
const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');

let rollButton = document.getElementById('rollBtn');
let resetButton = document.getElementById('resetBtn');
let message = document.getElementById('message');

rollButton.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Score += randomNum;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNum;
    message.textContent = 'Player 1 Turn';
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
  } else {
    player2Score += randomNum;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNum;
    message.textContent = 'Player 2 Turn';
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
  }
  player1Turn = !player1Turn;
});
