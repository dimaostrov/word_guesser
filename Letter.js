var Letter = function(character){
  this.character = character;
  this.guessed = false;
  this.returnLetter = () => {
    return this.guessed ? this.character : '_';
  };
  this.checkGuess = (x) => {
    x === this.character ? this.guessed = true : ''; 
  }
}


module.exports = Letter;