function Letter(letter) {
	this.letter = letter;
	this.guessed = false;
	this.display = () => {
		if (this.letter === ' ') {
			this.guessed = true;
			return ' ';
		} else if (this.guessed === false) {
			return '_';
		} else {
			return this.letter;
		}
	}
	this.check = (guess) => {
		if (guess === letter.toLowerCase()) {
			this.guessed = true;
			return true;
		} else {
			return false;
		}
	}
}

module.exports = Letter;