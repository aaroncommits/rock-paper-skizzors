

function getComputerChoice(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

let computerChoice = getComputerChoice(1,3)

console.log(computerChoice)

function getHumanChoice() {
  let humanChoice = prompt("What is your choice?") 
  return humanChoice;
}

console.log(getHumanChoice())


let humanScore = 0
let computerScore = 0


