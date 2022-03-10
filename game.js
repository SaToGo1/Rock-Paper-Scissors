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
   **************************************  */
function playRound(playerSelection, computerSelection){

    const resultDom = document.querySelector("#result");
    if (playerSelection == computerSelection){
        resultDom.textContent = "Draw! your opponent also pick " + playerSelection;
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            resultDom.textContent = "You Lose! Paper beats Rock";
            loses = loses + 1;
        }
        else {
            resultDom.textContent = "You Win! Rock beats Scissors";
            wins = wins + 1;
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors") {
            resultDom.textContent = "You Lose! Scissors beats Paper";
            loses = loses + 1;
        }
        else {
            resultDom.textContent = "You Win! Paper beats Rock";
            wins = wins + 1;
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            resultDom.textContent = "You Lose! Rock beats Scissors";
            loses = loses + 1;
        }
        else {
            resultDom.textContent = "You Win! Scissors beats Paper";
            wins = wins + 1;
        }
    } 
    updateWinsLoses();
}

function updateWinsLoses(){
    const winsDOM = document.querySelector("#wins");
    const losesDOM = document.querySelector("#loses");

    checkWinner();
    winsDOM.textContent = "wins: " + wins;
    losesDOM.textContent = "loses: " + loses;

}

function checkWinner(){
    const matchWinner = document.querySelector("#MatchWinner")
    matchWinner.textContent = ""
    if(wins == 5){
        matchWinner.textContent = "You Are The Winner with " + wins + " wins and " + loses + " loses";
        wins = 0;
        loses = 0;
    }
    else if(loses == 5){
        matchWinner.textContent = "You Lost, Computer is the Winner you had " + wins + " wins and " + loses + " loses";
        wins = 0;
        loses = 0;
    }
}
let wins = 0;
let loses = 0;
