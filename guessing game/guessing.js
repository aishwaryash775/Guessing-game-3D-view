let randomNumber;
let max;

const startBtn = document.getElementById("startGame");
const checkBtn = document.getElementById("checkGuess");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  max = parseInt(document.getElementById("maxNumber").value);
  if (isNaN(max) || max <= 1) {
    alert("Please enter a number greater than 1.");
    return;
  }
  randomNumber = Math.floor(Math.random() * max) + 1;
  document.querySelector(".setup").style.display = "none";
  document.querySelector(".game").style.display = "block";
  document.getElementById("rangeText").innerText = `1 and ${max}`;
});

checkBtn.addEventListener("click", () => {
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess)) {
    message.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = "🎉 You are right! Congrats!!";
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too small! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "📈 Too large! Try again.";
    message.style.color = "red";
  }
});
