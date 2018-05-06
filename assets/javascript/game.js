//PSUEDOCODE//

// Computer picks a random word //

//Put in what the player guesses//

//Quit the game if the player wants to//

//Make sure that the guess is a valid answer//

//Keep track of the players guesses//

//Keep track of the players progress//

//Finish when the player has guessed the word//

//variables//

var wins = 0; //how many wins//
var word; //selected word//
var guessWord = []; //guess//
var guessedLetters = []; //stored guesses//
var space; //number of spaces in a word//
const lives = "8"; //number of remaining lives//
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var randomWords = ["rancor", "greedo", "tatooine", "watto"];

function resetGame() {
    remainingGuesses = lives;
    gameStarted = false;
}

// Computer picks a random word//
word = Math.floor(Math.random() * randomWords.length);

guessedLetters = [];
guessingWord = [];

for (var i = 0; i < randomWords[word].length; i++) {
    guessingWord.push("_");

    updateDisplay();
};
//may need to update all of the categories here on the game column//

function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "_";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if (remainingGuesses <= 0) {
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};
//when the user pushes a key, see if its a letter and then save that entry//

document.onkeydown = function (event) {
    if (hasFinished) {
        resetGame();
        hasFinished = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
};

function evaluateGuess(letter) {
    var position = [];
    for (var i = 0; i < randomWords[word].length; i++) {
        if (randomWords[word][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--;
    } else { (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }

    }
};
//see if the user wins//
function checkWin() {
    if (guessingWord.indexOf("_") === -1) {
        wins++;
        hasFinished = true;
    }
};
