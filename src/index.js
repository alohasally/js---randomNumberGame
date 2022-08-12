const numGame = document.querySelector("#numGame input");
const numGuess = document.querySelector("#numGuess input");
const btnPlay = document.querySelector("#numGuess");

const gameSentence = document.querySelector("p");
const yourNum = document.querySelector("span:first-child");
const machineNum = document.querySelector("span:last-child");
const result = document.querySelector("#result");
const HIDDEN_CLASSNAME = "hidden";

function classList() {
  gameSentence.classList.remove(HIDDEN_CLASSNAME);
  result.classList.remove(HIDDEN_CLASSNAME);
}
function printResult(userValue, randomValue) {
  if (parseInt(userValue) === parseInt(randomValue)) {
    result.innerText = "You won!";
    classList();
  } else {
    result.innerText = "You lost!";
    classList();
  }
}

function numSubmit(event) {
  event.preventDefault();
  let randomNum = Math.ceil(Math.random() * Number(numGame.value));
  let userValue = numGuess.value;
  let randomValue = Number(randomNum);
  yourNum.innerText = userValue;
  machineNum.innerText = randomValue;
  printResult(userValue, randomValue);
}

btnPlay.addEventListener("submit", numSubmit);
