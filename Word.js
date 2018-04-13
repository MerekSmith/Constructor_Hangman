
var Letter = require('./Letter.js');
var displayWord = "";
var letterObjectsArray = [];

function makeObjects(randomWord) {
	var letterArray = randomWord.split('');
	for (let i = 0; i < letterArray.length; i++) {
		letterObjectsArray.push(new Letter(letterArray[i]));
	}
};

function Word(randomWord) {
	this.letterObjectsArray = letterObjectsArray;
	this.stringWord = () => {
		// This clears the word out so it does not duplicate
		displayWord = "";
		// this runs through a loop of the letter objects array and runs the returnLetter function to display either the letter or a "_" space depending on if it has been guessed or not.
		for (let i = 0; i < letterObjectsArray.length; i++) {
			displayWord += letterObjectsArray[i].returnLetter();
		}
		return displayWord;
	};
	this.userGuess = (guess) => {
		for (let i = 0; i < letterObjectsArray.length; i++) {
			letterObjectsArray[i].letterGuess(guess.toLowerCase());
		}
	};
	makeObjects(randomWord);
};


module.exports = Word;

