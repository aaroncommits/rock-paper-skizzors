
// Get choice number
function getComputerChoiceNumber(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerChoiceNumber 

// Convert to string

function stringComputerChoice(chosenNumber) {
    if (computerChoiceNumber === 1) {
      return "rock"
    } else if (computerChoiceNumber === 2){
        return "paper"
    } else if (computerChoiceNumber === 3){
        return "skizzors"
    }
    return;
}

// Get computer choice

function getComputerChoice() {
  computerChoiceNumber = getComputerChoiceNumber(1,3)
  computerChoice = stringComputerChoice(computerChoiceNumber)
  return computerChoice;
}

let computerChoice 

// Get hooman choice

function getHumanChoice() {
  return prompt("What is your choice?");
}

let humanChoice = getHumanChoice()  
  
// Play game specified number of times

function playGame(loops){

  let humanScore = 0
  let computerScore = 0

  do {
    
    getHumanChoice()
    getComputerChoice()
    playRound(humanChoice,computerChoice)

    function playRound(humanSelection, computerSelection) {
   
      humanChoiceLowered = humanChoice.toLowerCase()
      
      if (computerChoice === humanChoiceLowered) {
        console.log("It's a tie! No points awarded.")
      } else if (computerChoice == "rock" && humanChoiceLowered == "skizzors"){
        computerScore += 1 
        console.log("The computer smashed your skizzors, point for the metal box!");
      } else if (computerChoice == "skizzors" && humanChoiceLowered == "rock"){
        humanScore += 1
        console.log("The hooman has smawhts! Point goes to the hooman for crushing the skizzors.");
      } else if (computerChoice == "paper" && humanChoiceLowered == "rock"){
        computerScore += 1
        console.log("The computer covers the pebble with the paper, point goes to the process box.");
      } else if (computerChoice == "rock" && humanChoiceLowered == "paper"){
        humanScore += 1
        console.log("The hooman covers the pebble with the paper, point goes to the squishy one.");
      }  
    }
    
    rounds -= 1

  } while (rounds >= 1);

  if (rounds === 0 && humanScore > computerScore) {
    console.log("Hooman has won the game!");
  } else if (rounds === 0 && humanScore < computerScore) {
    console.log("Computing box has won the game!");
  } else if (rounds === 0 && humanScore == computerScore) {
    console.log("It's a darn tootin' tie!");
  }
}

// Ask how many rounds they want to play

let rounds = parseInt(prompt("How many rounds do you want to play?"))

playGame(rounds)

