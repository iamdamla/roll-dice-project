const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

var diceSound = new Audio;
diceSound.src = "sound/dice.mp3"


function getRandomNumber() {
  return 1 + Math.floor(Math.random() * 6);
}

function showDice() {
  diceTriggerEl.addEventListener("click", function () {
    let myRandomNumber = getRandomNumber();
    diceImageEl.src = "images/dice" + myRandomNumber + ".png";
    diceSound.play();

    
  })
}
showDice();


function shakeDice() {
  diceTriggerEl.addEventListener("click", function() {
    diceImageEl.classList.add("shake");

    setTimeout(() => {
      diceImageEl.classList.remove("shake");
    }, 600);

  })
}
shakeDice();