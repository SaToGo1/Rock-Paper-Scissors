function computerPlay () {

    let handType = "rock";
    //random number between 1 and 3.    
    let randomNumber = Math.floor( Math.random() * (4 - 1)) + 1;

    if (randomNumber == 1) handType = 'rock';
    else if (randomNumber == 2) handType = 'paper';
    else if (randomNumber == 3) handType = 'scissors';
    else console.log("error at computerPlay function");

    return handType;    
}

function playRound(playerSelection, computerSelection){

    let result = "result"
    if (playerSelection == computerSelection){
        result = "Draw! your opponent also pick " + playerSelection;
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            result = "You Lose! Paper beats Rock";
        }
        else {
            result = "You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors") {
            result = "You Lose! Scissors beats Paper";
        }
        else {
            result = "You Win! Paper beats Rock"
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            result = "You Lose! Rock beats Scissors";
        }
        else {
            result = "You Win! Scissors beats Paper"
        }
    } 
    return result;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));