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

    let result = 0;
    if (playerSelection == computerSelection){
        console.log("Draw! your opponent also pick " + playerSelection);
        result = 0;
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
            result = 2;
        }
        else {
            console.log("You Win! Rock beats Scissors");
            result = 1;
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            result = 2;
        }
        else {
            console.log("You Win! Paper beats Rock");
            result = 1;
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            result = 2;
        }
        else {
            console.log("You Win! Scissors beats Paper");
            result = 1;
        }
    } 
    return result;
}

function game(){

    let playerSelection = "empty"
    let computerSelection = "empty"

    for(let i = 0; i < 5; i++) {
        playerWins = 0;
        playerSelection = prompt("Select Rock, Paper or Scissors").toLowerCase();
        console.log("checking to lower case" + playerSelection);
        computerWins = 0;
        computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        if (result == 1){
            playerWins++;
        }
        else if(result == 2){
            computerWins++;
        }
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

game()