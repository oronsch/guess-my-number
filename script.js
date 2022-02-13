'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 10;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guessNum").value);
  console.log(guessNum);

  if (!guessNum) {
    document.querySelector(".message").textContent = "❌ Invalid Number ❌";
  } else if (guessNum === randomNumber) {
    document.querySelector(".check").style.display = "none";
    document.querySelector(".number").textContent = `🎉 ${randomNumber} 🎉`;
    document.querySelector("body").style.backgroundColor = "#8aac52";
    document.querySelector(".message").textContent = "👏 We Have A Winner 👏";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    console.log(score, "test");
  } else {
    score--;
    document.querySelector(".score").textContent = score;
    guessNum > randomNumber
      ? (document.querySelector(".message").textContent =
          "👇 Number Is Lower 👇")
      : (document.querySelector(".message").textContent =
          "👆 Number is Higher 👆");
  }
});

document.querySelector(".tryAgain").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber, "second");
  document.querySelector("body").style.backgroundColor = "cadetblue";
  document.querySelector(".score").textContent = score = 10;
  document.querySelector(".message").textContent = "🎰 Start Guessing 🎰";
  document.querySelector(".number").textContent = "?";
  Number((document.querySelector(".guessNum").value = ""));
  document.querySelector(".check").style.display = "inline";
});


