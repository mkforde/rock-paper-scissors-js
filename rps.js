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

let humanScore = 0;
let computerScore = 0;

console.log("Welcome to Rock, Raper, Scissors");
playRound(getHumanChoice(), getComputerChoice());

function playRound(humanChoice, computerChoice) {
	let winner = compareResults(humanChoice, computerChoice);
	if (winner == 0) {
		console.log(`Its a draw! ${humanChoice} is equal to ${humanChoice}`);
	} else if (winner < 0) {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	} else {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	}
	if(continueGame()) {
		playRound(getHumanChoice(), getComputerChoice());
	} else {
		console.log(`Thanks for playing. Final score is human: ${humanScore}, computer: ${computerScore}`);
	}	
}

function continueGame() {
	while(true) {
		let answer = prompt("Would you like to continue game? (y/n)");
		answer.toLowerCase();
		if (answer == "y" || answer == "n") {
			if (answer == "y") {
				return true;
			} else { return false;}
		} else {
			continue;
		}
	}
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
