
function Letter(letter) {
	this.letter = letter;
	this.guessed = false;
	this.returnLetter = () => {
		if (this.letter === ' ') {
			this.guessed = true;
			return ' ';
		} else {
			if (this.guessed) {
				return this.letter;
			} else {
				return "_";
			}
		}
	};
	this.letterGuess = (guess) => {
		if (guess.toLowerCase() === this.letter.toLowerCase()) {
			this.guessed = true;
		}
	}
};

module.exports = Letter;
