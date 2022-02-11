function computerPlay () {

    let handType = "Rock";
    //random number between 1 and 3.    
    let randomNumber = Math.floor( Math.random() * (4 - 1)) + 1;

    console.log("random = " + randomNumber);
    if (randomNumber == 1) handType = 'Rock';
    else if (randomNumber == 2) handType = 'Paper';
    else if (randomNumber == 3) handType = 'Scissors';
    else console.log("error at computerPlay function");

    return handType;    
}
