
//Set Variables
var Word = require('./word.js');
var inquirer = require('inquirer');

var wordArray = ['Jordan', 'Miller'];


function startGame() {
    var randomWord = wordArray[Math.ceil(Math.random() * wordArray.length) - 1]
    var word = new Word(randomWord)
    guess();
    function guess() {
        word.displayWord();
        if (word.guessesLeft > 0) {
            inquirer.prompt([
                {
                    type: "input",
                    name: "guess",
                    message: "Guess a letter"
                }
            ]).then(function (res) {
                word.checkLetter(res.guess);
                if (word.didIWin()) {
                    console.log('You win!')
                    restartGame();
                } else {
                    guess();
                }
            })
        } else if (word.guessesLeft === 0) {
            restartGame();
        }
    }
}

function restartGame() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: "Play again?"
        }
    ]).then(function (res) {
        if (res.restart) {
            startGame();
        }
    })
}

startGame();