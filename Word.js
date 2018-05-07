var Letter = require('./Letter');

var Word = function(word){
  this.letters = word.split('').map(x => new Letter(x));
  this.result = this.letters.map(x => x.returnLetter ).join(''); 
  this.makeGuess = (guess) => {
    this.letters.forEach(x => x.checkGuess(guess));
  }
}
/* tests
var cat = new Word('cat');
console.log(cat.makeGuess('c'))
console.log(cat.letters);
*/
module.exports = Word;