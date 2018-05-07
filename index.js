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
  return bank[Math.ceil(Math.random(bank.length))];
}

pickRandomWord();

function game(){
    inquirer.prompt([
      {
        type: input,
        name: letter,
        message: "Pick a letter!"
      }
    ]).then(answers => {
      
    });
}

while(guesses < guessessTotal){
    game()
    guesses++;
}
