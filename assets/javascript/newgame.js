var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var wordArray = ["almond cookie", "ambrosia", "angel food cake", "apple brown betty", "apple crisp",
"apple pie", "baked Alaska", "baked apple", "baklava", "banana split", "Belgian waffle", "biscotti",
"black forest cake", "blueberry muffin", "bombe", "Boston cream pie", "bread pudding", "brownie",
"buttercream frosting", "butterscotch", "cake", "cannoli", "caramel apple", "carrot cake", 
"cheesecake", "cherry pie", "chocolate bar", "chocolate cake", "chocolate chip cookie", "chocolate mousse",
"churro", "cinnamon roll", "cobbler", "coconut cake", "coconut cream pie", "coffee cake", "cookie",
"crepe suzette", "cupcake", "custard", "danish pastry", "dessert", "devils food cake","doughnut", "dumplings",
"eclair", "flan", "fortune cookie",]

var chosenWord = wordArray[Math.floor(wordArray.length * Math.random())];
var chosenWordSplit = chosenWord.split("");
console.log(chosenWord)
console.log(chosenWordSplit)

//Press any key to start the game
    //Onkeypress run the function that starts the game
    function startGame() {
        document.getElementById("start").style.backgroundColor = "red";
        document.getElementById("test").style.color = "green";
        chosenWordSplit.forEach(letter);  
      }

    function letter() {
        test.innerHTML = test.innerHTML + " " + "_" +" " ; 
      }
//The computer has to select a random word from an array

//That word is then displayed as _ _ _ _ _ _

//The user has 7 guesses, which decrement as a key is pressed
//The same key cannot be pressed again to decrement
//If the user uses all of the guesses then the game is over and there is an option to reset

//If the user selects a letter that is in the array then it if filled in _ _ e _
//If the user selects a letter that isn't in the array then it decrements and is displayed. X

//If the user fills the word then the game is won and that is displayed with an option to reset