let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    default:
      return "Scissors";
  }
}

function playRound(playerSelection) {
  // your code here!

  let computerSelection = getComputerChoice();

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(`Player ${playerSelection} Computer ${computerSelection}`);

  let result = "";
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      result = "Draw";
    } else if (computerSelection == "paper") {
      result = "Lose";
    } else {
      result = "Win";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "Win";
    } else if (computerSelection == "paper") {
      result = "Draw";
    } else {
      result = "Lose";
    }
  } else {
    //Player is scissors
    if (computerSelection == "rock") {
      result = "Lose";
    } else if (computerSelection == "paper") {
      result = "Win";
    } else {
      result = "Draw";
    }
  }

  console.log(result);
  if (result === "Win") {
    playerScore += 1;
  } else if (result === "Lose") {
    computerScore += 1;
  }

  const resultDiv = document.querySelector("#result > p");
  resultDiv.innerHTML = `You play ${playerSelection}, Computer plays ${computerSelection} 
  <br>Result: ${result}
  <br>Score:
  <br>Player: ${playerScore}, Computer: ${computerScore}
  `;

  if (playerScore >= 5) {
    resultDiv.innerHTML += `<br>You won the game!`;
    resetGame();
  } else if (computerScore >= 5) {
    resultDiv.innerHTML += `<br>You lost the game!`;
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  let buttonID = button.id;
  button.addEventListener("click", () => playRound(buttonID));
});
