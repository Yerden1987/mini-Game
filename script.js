const resetBtn = document.getElementById("resetBtn");
const gameQuestion = document.getElementById("gameQuestion");
const input = document.querySelector(".input");
const checkBtn = document.getElementById("checkBtn");
const gameStart = document.getElementById("gameStart");
const activeScore = document.querySelector(".active-score");
const highScore = document.querySelector(".highscore");
const hintText = document.getElementById("hintText");

let randomNumber = generateRandomNumber();
console.log(randomNumber);

checkBtn.addEventListener("click", checkNumber);

function generateRandomNumber() {
  return Math.floor(Math.random() * 20 + 1);
}

function checkNumber() {
  let inputNumber = +input.value;
  if (isNaN(inputNumber) || inputNumber === 0) {
    gameStart.innerHTML = "Enter the number, plz!";
    return;
  }
  if (activeScoreValue === 16) {
    hintText.innerHTML = 'Game Over';
    document.body.style.backgroundColor = '#ff6f61';
    input.disabled = true;
    input.value = '';
  }
  if (inputNumber === randomNumber) {
    document.body.style.backgroundColor = "#32cd32";
    gameQuestion.innerHTML = randomNumber;
    highScoreValue =
      activeScoreValue > highScoreValue ? activeScoreValue : highScoreValue;
    highScore.innerHTML = highScoreValue;
    input.value = "";
    input.disabled = true;
    gameStart.innerHTML = 'You Won!';
    hintText.innerHTML = 'You Won!';
  } else {
    getHint();
    input.value = "";
    activeScoreValue--;
    activeScore.innerHTML = activeScoreValue;
  }
}

function getHint() {
  let inputNumber = +input.value;
  if (randomNumber - inputNumber > 0) {
    if (randomNumber - inputNumber > 2) {
      gameStart.innerHTML = "Take bigger";
    } else {
      gameStart.innerHTML = "Bigger";
    }
  } else {
    if (randomNumber - inputNumber < -2) {
      gameStart.innerHTML = "Take smaller";
    } else {
      gameStart.innerHTML = "Smaller";
    }
  }
}

function limitInputNumber() {
  let inputNumber = +input.value;
  if (inputNumber > 20) {
    input.value = 20;
  } else if (inputNumber < 1) {
    input.value = 1;
  }
}

input.addEventListener("input", limitInputNumber);

resetBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#4f6d71';
    gameQuestion.innerHTML = '?';
    activeScore.innerHTML = starterScore;
    activeScoreValue = starterScore;
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    input.disabled = false;
    hintText.innerHTML = 'Catch the Number!';
    gameStart.innerHTML = 'Start catching...';
});

const starterScore = 20;
let activeScoreValue = 20;
let highScoreValue = 0;
activeScore.innerHTML = activeScoreValue;
highScore.innerHTML = highScoreValue;

document.querySelector("input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkNumber();
    }
  });