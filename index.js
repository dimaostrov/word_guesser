const Word = require("./Word");
const inquirer = require('inquirer');
let guesses = 0;
const guessessTotal = 10;


function pickRandomWord() {
  let bank = [
    "apple",
    "food",
    "homogeny",
    "alphabet",
    "fat",
    "albacore",
    "paleo",
    "provokacia",
    "perestroika",
    "slime",
    "gutter",
    "pierogi"
  ];
  return bank[Math.floor(Math.random() * bank.length)];
}

const guessWord = new Word(pickRandomWord());

function game(){
  if(guesses < guessessTotal){

    inquirer.prompt([
        {
          type: 'input',
          name: 'letter',
          message: "Pick a letter!"
        }
      ]).then(answers => {
        guessWord.makeGuess(answers.letter)
        console.log(guessWord.result());
        if(guessWord.result().match(/-/g)){
          guesses++;
          game();
        } else {
          console.log(`you've won!!!!`)
          process.exit();
        }
      });
  }  
}

game()
    

