let humanScore = 0;
let computerScore = 0;
let gameCounter = 0
let humanChoice = ""
let computerChoice = ""





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

function getHumanChoice() {
    let choice = window.prompt("Rock, paper, or Scissors?");
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
    if (humanChoice ==="rock" && computerChoice !== "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors")
            humanScore++ 
        } else if (computerChoice === "paper") {
            console.log("You lost! Paper beats Rock")
            computerScore++
        }
    }
    else if (humanChoice === "scissors" && computerChoice !== "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper")
            humanScore++ 
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++
        }
    }
    else if (humanChoice === "paper" && computerChoice !== "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock")
            humanScore++ 
        } else if (computerChoice === "scissors") {
            console.log("You lost! Scissors beats Paper")
            computerScore++
        }
    } else {
        console.log("It's a tie! Both choices were " + humanChoice)
    }
}

function playGame () {
    while (gameCounter != 5) {
        console.log(gameCounter)
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        console.log(humanChoice, computerChoice)
        console.log(playRound(humanChoice, computerChoice))

        gameCounter++
        
    }
}





console.log(playGame())
console.log("Your Score= " + humanScore, "Computers Score= "+computerScore)
