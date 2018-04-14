
var Letter = require('./Letter.js');
var displayWord = "";
var letterObjectsArray = [];

function makeObjects(randomWord) {
	letterObjectsArray = [];
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
			displayWord += letterObjectsArray[i].returnLetter() + " ";
		}
		return displayWord;
	};
	this.userGuess = (guess) => {
		for (let i = 0; i < letterObjectsArray.length; i++) {
			letterObjectsArray[i].letterGuess(guess)
		};
		for (let i = 0; i < letterObjectsArray.length; i++) {
			if (letterObjectsArray[i].guessed && letterObjectsArray[i].letter.toLowerCase() === guess) {
				return true;
			}
		};
	};
	this.wordComplete = () => {
		for (let i = 0; i < letterObjectsArray.length; i++) {
			if (!letterObjectsArray[i].guessed) {
				return false;
			} 
		}
		return true;
	};
	makeObjects(randomWord);
};


module.exports = Word;

