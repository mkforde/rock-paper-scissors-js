function getComputerChoice() {
	// Randomize 0-2
	let compChoice = Math.floor(Math.random() * 3);
	// Turn integer into string
	let result;
	switch (compChoice) {
		case 0:
			result = "rock";
			break;
		case 1:
			result = "paper";
			break;
		case 2:
			result = "scissors";
			break;
		default:
			break;
	}
	return result;
}

function getHumanChoice() {
	while(true) {
		let humanChoice = prompt("Enter either Rock, Paper, or Scissors!");	
		humanChoice = humanChoice.toLowerCase();
		if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
			return humanChoice;
		} else { continue; }
	}
}


function playRound(humanChoice, computerChoice) {
	let winner = compareResults(humanChoice, computerChoice);
	if (winner == 0) {
		alert(`Its a draw! ${humanChoice} is equal to ${humanChoice}`);
	} else if (winner < 0) {
		alert(`You lose! ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	} else {
		alert(`You win! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	}
	if(continueGame()) {
		playRound(getHumanChoice(), getComputerChoice());
	} else {
		alert(`Thanks for playing. Final score is human: ${humanScore}, computer: ${computerScore}`);
	}	
}

function continueGame() {
	  return confirm("Would you like to continue game?");	
}

// Like a java compareTo but for rps
function compareResults(humanChoice, computerChoice) {
	if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			return -1;
		}
		else if (computerChoice == "scissors") {
			return 1;
		} else if (computerChoice == "rock") {
			return 0;
		}
	}
	
	else if (humanChoice == "paper") {
		if (computerChoice == "scissors") {
			return -1;
		}
		else if (computerChoice == "rock") {
			return 1;
		} else if (computerChoice == "paper") {
			return 0;
		}
	}

	else if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			return -1;
		}
		else if (computerChoice == "paper") {
			return 1;
		} else if (computerChoice == "scissors") {
			return 0;
		}
	}
	
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
	humanScore = 0;
	computerScore = 0;

	alert("Welcome to Rock, Paper Scissors");	
	playRound(getHumanChoice(), getComputerChoice()); 
}



