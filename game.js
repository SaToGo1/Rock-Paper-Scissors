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

/* **************************************
gets (playerSelection, computerSelection)
    both have a string with next values
    "rock"
    "paper"
    "scissors" 

returns result -> number that represents victory deafeat or draw
    0-> Draw,
    1-> Victory,
    2-> Lose,
   **************************************  */
function playRound(playerSelection, computerSelection){

    let result = 0;
    const resultDom = document.querySelector("#result");
    if (playerSelection == computerSelection){
        resultDom.textContent = "Draw! your opponent also pick " + playerSelection;
        result = 0;
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            resultDom.textContent = "You Lose! Paper beats Rock";
            result = 2;
        }
        else {
            resultDom.textContent = "You Win! Rock beats Scissors";
            result = 1;
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors") {
            resultDom.textContent = "You Lose! Scissors beats Paper";
            result = 2;
        }
        else {
            resultDom.textContent = "You Win! Paper beats Rock";
            result = 1;
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            resultDom.textContent = "You Lose! Rock beats Scissors";
            result = 2;
        }
        else {
            resultDom.textContent = "You Win! Scissors beats Paper";
            result = 1;
        }
    } 
    return result;
}

/*
function game(){

    let playerSelection = "empty"
    let computerSelection = "empty"

    playerSelection = prompt("Select Rock, Paper or Scissors").toLowerCase();
    computerWins = 0;
    computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);
    if (result == 1){
        playerWins++;
    }
    else if(result == 2){
        computerWins++;
    }

    if (computerWins > playerWins){
        console.log("You lost the best of Five rounds.");
    }
    else if (computerWins < playerWins){
        console.log("You win the best of Five rounds.");
    }
    else {
        console.log("Draw in a best of Five rounds.");
    }
}
*/