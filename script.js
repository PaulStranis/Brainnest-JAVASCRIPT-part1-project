let playerScore = 0;
let computerScore = 0;
const gameOptions = ["Rock", "Paper", "Scissor"];

function computerPlay() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection.toLowerCase()) {
    playerScore++;
    computerScore++;
    return alert("Draw!");
  } else if (computerSelection == gameOptions[0]) {
    if (playerSelection == "paper") {
      playerScore++;
      alert("You Won! " + "Paper beats " + computerSelection);
    } else {
      computerScore++;
      alert("Computer Won! " + computerSelection + " beats Scissor.");
    }
  } else if (computerSelection == gameOptions[1]) {
    if (playerSelection == "scissor") {
      playerScore++;
      alert("You Won! " + "Scissor beats " + computerSelection);
    } else {
      computerScore++;
      "Computer Won! " + computerSelection + " beats Rock.";
    }
  } else if (computerSelection == gameOptions[2]) {
    if (playerSelection == "rock") {
      playerScore++;
      alert("You Won! " + "Rock beats " + computerSelection);
    } else {
      computerScore++;
      alert("Computer Won! " + computerSelection + " beats Paper");
    }
  }
}

function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = prompt(
    'Please insert your opition for the "Rock, Paper, Scissor" game',
    "Rock, paper or scissor."
  ).toLowerCase();
  checkWinner(playerSelection, computerSelection);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerScore > computerScore) {
    alert(`You won! Final result: ${playerScore} - ${computerScore}`);
  } else {
    if (playerScore === computerScore) {
      alert(`Draw! Final result: ${computerScore} - ${playerScore}`);
    }
    alert(`Computer won! Final result: ${computerScore} - ${playerScore}`);
  }
}

console.log(game());
