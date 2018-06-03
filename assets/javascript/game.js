// Global Variables//
var computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var gLetters = [];
var letterToGuess = null;

var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoices);
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innnerHTML = losses;

// Functions //


//guesses left//
var updateGuessesLeft = function() {
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
};

//letter to guess//
var updateLetterToGuess = function() {
    this.lettertoGuess = this.computerChoices [Math.floor(Math.random() * this.computerChoices.length)];
    console.log(this.computerChoices);
};

//current letters guessed//
var updateCurrentGuesses = function() {
    document.getElementById("lettersGuessed").innerHTML = gLetters;
};

//reset function//
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    gLetters = [];
    
    updateGuessesLeft();
    updateLetterToGuess();
    updateCurrentGuesses();
};

updateGuessesLeft();
updateLetterToGuess();

//user input//
document.onkeyup = function(event) {
    var userGuess = event.key;
    guessesLeft--;

    gLetters.push(userGuess);
    updateGuessesLeft();
    updateCurrentGuesses();

    if (guessesLeft > 0){
        if (userGuess === letterToGuess){
            wins++;
            document.getElementById("wins").innerHTML = wins;
            console.log(wins);
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").innherHTML = losses;
        console.log(losses);
        reset();
    }

}


