function getComputerChoice() {
  let choice = Math.floor(Math.random() * 10) + 1;
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    default:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(`Player ${playerSelection} Computer ${computerSelection}`);

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      console.log("Draw");
    } else if (computerSelection == "paper") {
      console.log("Lose");
    } else {
      console.log("Win");
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      console.log("Win");
    } else if (computerSelection == "paper") {
      console.log("Draw");
    } else {
      console.log("Lose");
    }
  } else {
    //Player is scissors
    if (computerSelection == "rock") {
      console.log("Lose");
    } else if (computerSelection == "paper") {
      console.log("Win");
    } else {
      console.log("Draw");
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log("New game");
    const playerSelection = prompt("Enter your choice (rock/paper/scissors): ");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
