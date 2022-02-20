"use strict"

// Creating elements
let randomNumber = Math.trunc(Math.random() * 20) + 1
let score = 10;
let highScore = 0;

const placeMessage = message => document.querySelector(".message").textContent = message;
const buttonControl = control => document.querySelector(".check").style.display = control;
const changeBg = color => document.querySelector("body").style.backgroundColor = color;
const secretNum = number => document.querySelector(".number").textContent = number;

// onClick button to get value from the input
document.querySelector('.check').addEventListener('click', function () {
    const guessNum = Number(document.querySelector(".guessNum").value);
    
  // Conditions for random gussed number
    if (!guessNum) placeMessage("❌ Invalid Number ❌");
    else if (guessNum === randomNumber) {
        secretNum(`🎉 ${randomNumber} 🎉`)
        changeBg("#8aac52");
        buttonControl('none');
        placeMessage("👏 We Have A Winner 👏");
       
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }    
    } else {
        score--;
        document.querySelector(".score").textContent = score;
        placeMessage( guessNum > randomNumber ? "👇 Number Is Lower 👇" : "👆 Number is Higher 👆" );
    }
    

});
// Try again and restart the game
document.querySelector('.tryAgain').addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score = 10;
    Number((document.querySelector(".guessNum").value = ""));
    secretNum('?')
    changeBg("cadetblue");
    buttonControl("inline");
    placeMessage('🎰 Start Guessing 🎰')
   ;
})
