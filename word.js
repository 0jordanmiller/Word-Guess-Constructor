
var Letter = require('./letter.js');

var Word = function (word) {
    this.guessesLeft = 5;
    this.letterObjArray = [];
    for (i = 0; i < word.length; i++) {
        this.letterObjArray.push(new Letter(word[i]));
    }

    this.displayWord = () => {
        var arr = [];
        this.letterObjArray.forEach(function (arrayItem) {
            arr.push(arrayItem.display());
        })
        var arrJoined = arr.join(' ');
        console.log(arrJoined);
    }

    this.checkLetter = (guess) => {
        var correctGuess = false;
        this.letterObjArray.forEach(function (letterObj) {
            letterObj.check(guess);
            if (letterObj.check(guess)) {
                correctGuess = true;
            }
        });
        if (correctGuess === false && this.guessesLeft > 0) {
            this.guessesLeft--;
            console.log('Incorrect! guesses left: ' + this.guessesLeft);
            if (this.guessesLeft === 0) {
                console.log('You ran out of guesses');
            }
        } else {
            console.log('Correct!');
        }
    }
    
    this.checkWin = (currentValue) => {
        return currentValue.guessed === true;
    }

    this.didIWin = () => {
        return this.letterObjArray.every(this.checkWin);
    }


}


module.exports = Word