"use strict";
//Timer
let seconds = 60;
// function countDown() {
//   if (seconds > 0) {
//     seconds--;
//   }
//   minuteElement.textContent = floor(seconds / 60);
//   secondElement.textContent = seconds % 60;
// }

//DOMelements
let code = document.querySelector(".code");
let answer = document.querySelector(".code1");
let scoreElement = document.querySelector("#scorePoint");
let minuteElement = document.querySelector("#minute");
let secondElement = document.querySelector("#second");

const startPlay = function () {
  let myInterval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      minuteElement.innerHTML = `${Math.floor(seconds / 60)} :`;
      secondElement.innerHTML = `&nbsp${seconds % 60}`;
      console.log(seconds);
    } else {
      clearInterval(myInterval);
      gameOver = true;
    }
  }, 1000);
  generateCode();
  onePlay();
};

//variable
let codeArray = [];
let answerArray = [];
let score = 0;
let gameOver = false;

//functions
const fixCodeText = function () {
  let tempText = "";
  for (let i = 0; i < 11; i++) {
    tempText += codeArray[i] + " ";
  }
  code.textContent = tempText;
};

const generateCode = function () {
  for (let i = 0; i < 11; i++) {
    const digit = Math.trunc(Math.random() * 10);
    codeArray[i] = digit;
  }
  fixCodeText();
};

const gameRestart = function () {
  generateCode();
  answerArray.length = 0;
  answer.textContent = "";
};

const checkCode = function (e) {
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0"
  ) {
    const eNumber = Number(e.key);
    if (answerArray.length < 11) {
      answerArray.push(eNumber);
      answer.textContent += `${eNumber} `;
    }
    if (answerArray.length === 11) {
      let checkAnswer = true;
      for (let i = 0; i < 11; i++) {
        if (answerArray[i] !== codeArray[i]) checkAnswer = false;
      }
      if (checkAnswer) {
        console.log("right answer");
        score++;
        scoreElement.textContent = score;
      } else console.log("wrong answer");
      gameRestart();
    }
  }
};

const onePlay = function () {
  let checkPosition = 0;
  document.addEventListener("keypress", checkCode);
};

const restartTimer = function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;
}; ///try this

if (gameOver === false) {
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") startPlay();
  });
}
console.log(lee);
//
