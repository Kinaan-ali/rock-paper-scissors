let humanScore = 0;
let computerScore = 0;
let humanScr = document.getElementById("humanScr");
let computerScr = document.getElementById("computerScr");
let gameCounter = 0;
let humanChoice = "";
let computerChoice = "";
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
rock.addEventListener('click',() => playRound('rock'));
paper.addEventListener('click',() => playRound('paper'));
scissors.addEventListener('click',() => playRound('scissors'));







function getComputerChoice () {
    const num = Math.floor(Math.random() * 3)
    let choice = ""
    if (num === 0) {
        choice = "rock"
    } else if (num === 1) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    humanScr.textContent = "Your score: " + humanScore;
    computerScr.textContent = "Computers score: " + computerScore;

}



function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    
    if (humanChoice ==="rock" && computerChoice !== "rock") {
        if (computerChoice === "scissors") {
            alert("You win! Rock beats Scissors")
            humanScore++;
            humanScr.textContent = "Your score: " + humanScore;
        } else if (computerChoice === "paper") {
            alert("You lost! Paper beats Rock")
            computerScore++;
            computerScr.textContent = "Computers score: " + computerScore;
            
        }
    }
    else if (humanChoice === "scissors" && computerChoice !== "scissors") {
        if (computerChoice === "paper") {
            alert("You win! Scissors beats Paper")
            humanScore++;
            humanScr.textContent = "Your score: " + humanScore;
        } else if (computerChoice === "rock") {
            alert("You lose! Rock beats Scissors")
            computerScore++;
            computerScr.textContent = "Computers score: " + computerScore;
        }
    }
    else if (humanChoice === "paper" && computerChoice !== "paper") {
        if (computerChoice === "rock") {
            alert("You win! Paper beats Rock")
            humanScore++;
            humanScr.textContent = "Your score: " + humanScore;
        } else if (computerChoice === "scissors") {
            alert("You lost! Scissors beats Paper")
            computerScore++;
            computerScr.textContent = "Computers score: " + computerScore;
        }
    } else {
        alert("It's a tie! Both choices were " + humanChoice)
    }
    if (humanScore == 5) {
        alert("You win best of 5!");
        restartGame();
    } else if (computerScore == 5) {
        alert("Computer wins best of 5!");
        restartGame();
        
    }
}







// console.log(playGame())
// console.log("Your Score= " + humanScore, "Computers Score= "+computerScore)
