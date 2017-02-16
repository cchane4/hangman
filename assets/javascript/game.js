
//GLOBAL VARIABLES
//*****************************************************************************
//game counters (things we keep track of)
var winCounter = 0;
var lossCounter = 0;
var guessesRemaining = 9;
//arrays and variables for holding data 
var lettersinWord = []; //what letters are actually in the word with their own indexes 
var wordOptions = ["boy", "girl", "ball", "cat", "dog", "hat", "house", "car"]; //all available words to be guessed 
var selectedWord = ""; //holds the chosen word 
var numBlanks = 0; // number of blanks in the word based on number of letters in the word 
var wrongLetters = []; //wrong guesses 
var blanksAndSuccesses = []; //holds blanks and successful guesses

// GLOBAL FUNCTIONS 
//*****************************************************************************
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //chooses at random a word in the wordOptions array of words 
    lettersinWord = selectedWord.split(""); //allows for an array of individual letters 	//numBlanks = lettersinWord.length; 
    numBlanks = lettersinWord.length;
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);


    //reset round of game  
    blanksAndSuccesses = [];
    wrongLetters = [];
    guessesRemaining = 9;

    // repopulate blanksAndSuccesses with correct number of blanks for guessing 
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
        console.log(blanksAndSuccesses);
    }

    //change html to reflect word conditions 
    document.getElementById("wordDiv").innerHTML = blanksAndSuccesses.join(" "); // if you don't use .join, the commas will show up between letters 
    document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guessesRemaining;
    document.getElementById("wins").innerHTML = "Wins: " + winCounter;
    document.getElementById("losses").innerHTML = "Losses: " + lossCounter;
}


//checks if the letter exists at all
function checkLetters(letterGuessed) {
    var lettersinWord = false; // default is that letter doesnt exist 

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letterGuessed) {
            lettersinWord = true;

        }
    }
    //check location of letter and populate the array with that letter if letter is found 
    if (lettersinWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letterGuessed) {
                blanksAndSuccesses[i] = letterGuessed;

            }
        }
    }
    // if the letter wasn't found 
    else {
        wrongLetters.push(letterGuessed);
        guessesRemaining--;
    }
    console.log(blanksAndSuccesses);
}


function roundDone() {
    //update html 
    document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guessesRemaining;
    document.getElementById("wordDiv").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = "Wrong Guesses: " + wrongLetters.join(" ");

    //checks to see if you won 
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        document.getElementById("wins").innerHTML = "Wins:" + winCounter;
        winCounter++;
        startGame();
        alert("you win");
    }
    //checks to see if you lost 
    else if (guessesRemaining == 0) {
        lossCounter++;
        alert("you lose");
        document.getElementById("losses").innerHTML = "Loss:" + lossCounter;
        startGame();
    }
}
//MAIN PROCESS
//*****************************************************************************
// initiate code for the first time 
startGame();
//register keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundDone();
};
