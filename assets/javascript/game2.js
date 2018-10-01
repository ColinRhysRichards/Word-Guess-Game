var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar.push(userGuess);
    if (userGuess == computerGuess) {
        wins++;
        alert("You Won!");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (guessesLeft == 0) {
        losses++;
        alert("Try Again");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }
    var html = "<h1>Guess the letter</h1>" +
        "<p>Total Wins: " + wins + "</p>" +
        "<p>Total Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guessesSoFar + "</p>"
        ;
    document.querySelector('#game').innerHTML = html;
}
// </script>
// // var randomWords = ["rancor", "greedo", "tatooine", "watto"];
// // var choice = Math.floor(Math.random()*4);
// // var answer = randomWords[choice];
// // var myLength = answer.length;
// // var display = [myLength];
// // var letters = answer.split('');
// // var attemptsLeft = 10;
// // var output = "";
// // var userLetter = "";

// // var setup = function(){
// //     for(var i=0; i<answer.length; i++)
// //     {
// //         display[i] = "_ ";
// //         output = output + display[i];
// //     }
// //     document.getElementById("#guesses").innerHTML = output;
// // output = "";
// // }

// // for (var i = 0; i < answer.length; i++) {
// //     answerArray[i] = "_";
// //     }



// // console.log(answer);
// // console.log(output);
// // console.log(display);
// // console.log(letters);

/