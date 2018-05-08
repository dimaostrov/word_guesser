var Letter = function(character){
  this.character = ` ${character} `;
  this.guessed = false;
  this.returnLetter = () => this.guessed ? this.character : '_-_';
  this.checkGuess = (x) => x === this.character ? this.guessed = true : ''; 
}



module.exports = Letter;