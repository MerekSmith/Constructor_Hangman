var Word = require('./Word.js');
var inquirer = require('inquirer');

var hangmanWords = ['Disney', 'Ariel', 'Belle', 'Moana', 'Elsa', 'Anna', 'Castle', 'Princess', 'Prince', 'Mulan', 'Aurora'];
var guesses = 10;
var wins = 0;
var losses = 0;
var randomWord = "";

// Initialize random word. 
chooseWord();
function chooseWord() {
	randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
}


function restartGame() {
	inquirer.prompt([
		{
			type: "confirm",
			message: "Want to play again?",
			name: "restart"
		}
	]).then(function (restartResponse) {
		console.log(restartResponse.restart);
		if (restartResponse.restart) {
			chooseWord();
			newWord = new Word(randomWord);
			guesses = 10;
			console.log(newWord.stringWord());
			console.log(randomWord);
			hangmanGame();
		} else {
			console.log('GOODBYE!! PLAY AGAIN SOON!!')
		}
	});
};



var newWord = new Word(randomWord);


console.log('Get ready to play Hangman! Your word is below:')
console.log(newWord.stringWord());

console.log(randomWord);
function hangmanGame() {

	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter!",
			default: true,
			name: "userGuess"
		}
	]).then(function (guessResponse) {
		if (newWord.userGuess(guessResponse.userGuess)) {
			console.log('\x1b[32m%s\x1b[0m%s', 'CORRECT!!!');
			if (newWord.wordComplete()) {
				console.log('You got it right!! Next word!')
				chooseWord();
				guesses = 10;
				newWord = new Word(randomWord)
				console.log(newWord.stringWord());
				console.log(randomWord);
			} else {
				console.log(newWord.stringWord());
				console.log(randomWord);
			}
			hangmanGame();
		} else {
			guesses--;
			console.log('\x1b[31m%s\x1b[0m', 'INCORRECT!!!');
			console.log('You have ' + guesses + ' guesses remaining!');
			if (guesses === 0) {
				console.log('\x1b[31m%s\x1b[0m', 'Sorry, you ran out of guesses!');
				console.log('The word was ' + randomWord + '!');
				restartGame();
			} else {
				hangmanGame();
			}
		}
	});
};


// Initialize game
hangmanGame()