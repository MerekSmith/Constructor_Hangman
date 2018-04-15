var Word = require('./Word.js');
var inquirer = require('inquirer');

var hangmanWords = ['Disney', 'Ariel', 'Belle', 'Moana', 'Elsa', 'Anna', 'Castle', 'Princess', 'Prince', 'Mulan', 'Aurora', 'Tiana', 'Snow White', 'Cinderella', 'Repunzel', 'Princess and the Frog', 'Beauty and the Beast', 'Brave', 'Merida', 'Sleeping Beauty', 'Frozen', 'Charming', 'Jasmine', 'Aladdin', 'Tangled'];
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
			hangmanGame();
		} else {
			console.log('GOODBYE!! PLAY AGAIN SOON!!')
		}
	});
};


var newWord = new Word(randomWord);


console.log('\nGet ready to play Hangman! Your word is below:')
console.log(newWord.stringWord());


function hangmanGame() {

	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter!",
			name: "userGuess"
		}
	]).then(function (guessResponse) {
		if (newWord.userGuess(guessResponse.userGuess)) {
			console.log('\x1b[32m%s\x1b[0m', '\nCORRECT!!!');
			if (newWord.wordComplete()) {
				console.log(randomWord);
				console.log('\x1b[42m%s\x1b[0m','You got it right!! Next word!\n')
				chooseWord();
				guesses = 10;
				newWord = new Word(randomWord)
				console.log(newWord.stringWord());
			} else {
				console.log(newWord.stringWord());
			}
			hangmanGame();
		} else {
			guesses--;
			console.log('\x1b[31m%s\x1b[0m', '\nINCORRECT!!!');
			console.log('You have ' + guesses + ' guesses remaining!');
			console.log(newWord.stringWord());
			if (guesses === 0) {
				console.log('\n---------------------------');
				console.log('\x1b[31m%s\x1b[0m', 'Sorry, you ran out of guesses!');
				console.log('\x1b[41m%s\x1b[0m','The word was ' + randomWord + '!');
				console.log('---------------------------\n');
				restartGame();
			} else {	
				hangmanGame();
			}
		}
	});
};


// Initialize game
hangmanGame()