var Word = require('./Word.js');
var inquirer = require('inquirer');

var hangmanWords = ['Disney', 'Ariel', 'Belle', 'Moana', 'Elsa', 'Anna', 'Castle', 'Princess', 'Prince', 'Mulan', 'Aurora'];
var randomWord = "";

// Initialize random word. 
chooseWord();
function chooseWord() {
	randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
}


var newWord = new Word(randomWord);


console.log('Are you ready to play Hangman? Your word is below:')
console.log(newWord.stringWord());

console.log(randomWord);
function hangmanGame() {

	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter!",
			name: "userGuess"
		}
	]).then(function (guessResponse) {
		if (newWord.userGuess(guessResponse.userGuess)) {
			console.log('CORRECT!!!');
		} else {
			console.log('INCORRECT!!!');
		}
		console.log(newWord.stringWord());
		console.log(randomWord);
	});
};


// Initialize game
hangmanGame()