
//GLOBAL VARIABLES
//*****************************************************************************
//game counters (things we keep track of)
var winCounter = 0; 
var lossCounter= 0; 
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
function startGame (){ 
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //chooses at random a word in the wordOptions array of words 
	lettersinWord = selectedWord.split(""); //allows for an array of individual letters 	//numBlanks = lettersinWord.length; 
	numBlanks = lettersinWord.length; 


//reset round of game  
	blanksAndSuccesses = [];  
	wrongLetters = []; 
	guessesRemaining = 9; 

// repopulate blanksAndSuccesses with correct number of blanks for guessing 
for (var i=0; i < numBlanks; i++){ 
	blanksAndSuccesses.push("_"); 
	} 
	console.log(blanksAndSuccesses); 

}


//change html to reflect word conditions 
document.getElementById("wordDiv").innerHTML = blanksAndSuccesses.join(" "); // if you don't use .join, the commas will show up between letters 
document.getElementById("guesses").innerHTML = guessesRemaining; 
document.getElementById("wins").innerHTML = winCounter; 
document.getElementById("losses").innerHTML = lossCounter;


 //checks if the letter exists at all
function checkLetters(letterGuessed){ 
var lettersinWord = false; // default is that letter doesnt exist 
alert (letterGuessed); 
for (var i = 0; i < numBlanks; i++){ 
		if (selectedWord[i] == letterGuessed){ 
		lettersinWord = true; 
		alert('letter found'); 
   		}
	}

//check location of letter and populate the array with that letter 
 if (letterinWord){
for (var i = 0; i < numBlanks; i++){ 
		if (selectedWord[i] == letterGuessed){ 
			blanksAndSuccesses[i] == letterGuessed; 
		}
	} 
} 
// letter wasn't found 
else{ 	
	wrongLetters.push(letter); 
	guessesRemaining--; 
	}
} 


//MAIN PROCESS
//*****************************************************************************
// initiate code for the first time 
startGame(); 
//register keyclicks
document.onkeyup = function(event){ 
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
	checkLetters(letterGuessed);
	console.log(letterGuessed); 
};  





