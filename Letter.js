
function Letter(letter) {
	this.letter = letter;
	this.guessed = false;
	this.returnLetter = () => {
		if (this.guessed) {
			return this.letter;
		} else {
			return "_";
		}
	};
	this.letterGuess = (guess) => {
		if (guess === this.letter) {
			this.guessed = true;
		}
	}
};


module.exports = Letter;

// test commands
// var a = new Letter('a');
// var guess = process.argv[2];
// a.letterGuess(guess);
// console.log(a.returnLetter())