var wins = 0;
var guessesLeft = 14;
var incorrectLetters = [];
var correctLetters = [];
var words = [
  "planck",
  "cherry mx",
  "zealios",
  "dactyl",
  "dactyl-manuform",
  "iris",
  "lets split",
  "ergodox"
];
var currentWord = words[Math.floor(Math.random() * 8)];
//correct letters are turned into underscores at the same length of the random word
for (var i = 0; i < currentWord.length; i++) {
  correctLetters.push("_");
}

//
function guess(letterGuessed) {
  guessesLeft--;

  //this -1 return value as part of the indexOf method was a game changer for my logic
  //the method will return -1 if the value/letter is not found in currentWord
  if (currentWord.indexOf(letter) === -1) {
    incorrectLetters.push(letter);
  }
}

//on any keypress, start the game
document.onkeyup = function(event) {
  var letterGuessed = event.key;
  guess(letterGuessed);
};
