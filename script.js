
// Get choice number
function getComputerChoiceNumber(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Convert to string

function changeComputerChoice(computerChoiceNumber) {
    if (getComputerChoiceNumber(1,3) === 1) {
      computerChoiceString = "rock"
    } else if (getComputerChoiceNumber(1,3) === 2){
        computerChoiceString = "paper"
    } else if (getComputerChoiceNumber(1,3) === 3){
        computerChoiceString = "skizzors"
    }
    return computerChoiceString;
}

const computerChoice = changeComputerChoice()

console.log(computerChoice)

// Get hooman choice

function getHumanChoice() {
  let humanChoice = prompt("What is your choice?") 
  return humanChoice;
}

const humanChoice = getHumanChoice()

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

// Get score of round

function playRound(humanSelection, computerSelection) {
 
  humanChoice.toLowerCase()
  
  if (computerChoice === humanChoice) {
    return "It's a tie! No points awarded."
  } else if (computerChoice == "rock" && humanChoice == "skizzors"){
    computerScore += 1 
    return "The computer smashed your skizzors, point for the metal box!"
  } else if (computerChoice == "skizzors" && humanChoice == "rock"){
    humanScore += 1
    return "The hooman has smawhts! Point goes to the hooman for crushing the skizzors."
  } else if (computerChoice == "paper" && humanChoice == "rock"){
    computerScore += 1
    return "The computer covers the pebble with the paper, point goes to the process box."
  } else if (computerChoice == "rock" && humanChoice == "paper"){
    humanScore += 1
    return "The hooman covers the pebble with the paper, point goes to the squishy one."
  }  
}

playRound(humanChoice,computerChoice);
