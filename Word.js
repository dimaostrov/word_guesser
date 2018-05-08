var Letter = require('./Letter');

var Word = function(word){
  this.letters = word.split('').map(x => new Letter(x));
  this.result = () => { return this.letters.map(x => x.returnLetter()).join('')}; 
  this.makeGuess = (guess) => {
    this.letters.forEach(x => x.checkGuess(` ${guess} `));
  }
}


module.exports = Word;