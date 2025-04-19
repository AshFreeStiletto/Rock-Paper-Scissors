
function getComputerChoice() {
    sum = Math.floor(Math.random() * 3);
    if (sum === 0) {
        return "Rock";
    } else if (sum === 1) {
        return "Paper";
    } else if (sum === 2) {
        return "Scissors";
    };
}
console.log(getComputerChoice())

function getHumanChoice() {
   choice = prompt("Choose between rock, paper and scissors");
   return choice.toLowerCase();
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    winner = "";
    if (humanChoice === "rock" && computerChoice === "Rock") {
        console.log("Draw.")
        winner = "none"
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        console.log("You lost! Paper beats rock.");
        winner = "Computer"
    } else if (humanChoice === "rock" && computerChoice === "Scissors") {
        console.log("You won! rock beats Scissors.")
        winner = "Human"
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
        console.log("You won! paper beats Rock.")
        winner = "Human"
    } else if (humanChoice === "paper" && computerChoice === "Paper") {
        console.log("Draw.")
        winner = "none"
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        console.log("You lost! Scissors beat paper.")
        winner = "Computer"
    } else if (humanChoice === "scissors" && computerChoice === "Rock") {
        console.log("You lost! Rock beats scissors.") 
        winner = "Computer"
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        console.log("You won! scissors beat Paper.")
        winner = "Human"
    } else if (humanChoice === "scissors" && computerChoice === "Scissors"){
        console.log("Draw.")
        winner = "none"
    }
    return winner;
}

function playGame() {
    let computerPoint = 0;
    let humanPoint = 0;
    i = 0
    while (i < 6) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        if (winner === "Computer") {
            computerPoint = computerPoint + 1;
        } else if (winner === "Human") {
            humanPoint = humanPoint + 1;
        }
        console.log("Human Score " + humanPoint);
        console.log("Computer Score " + computerPoint);

        i++;

    }
    if (humanPoint > computerPoint) {
        console.log("Human won!")
    } else {
        console.log("Computer Won!")
    }
}
playGame()

