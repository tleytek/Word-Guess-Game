//indexOf is a small revelation for me here, my problems were finding a way to go through every character in a string/array
//and if a key stroke matched 1 character in that array then the if condition would be met. But I soon found you couldn't have a for loop to go
//through every index as part of an if statement, like this:
//
//if( for (int i = 0; i < 5; i++) { } ) { }
//
//and this set me back for MANY hours until I found .indexOf, which is basically a for loop executed on an array, and its little AWSOME quirk
//of returning -1 if the character wasn't found
//
//

var wins = 0;
var guessesLeft = 14;
var incorrectLetters = [];
var correctLetters = [];
var words = ["planck", "nyquist", "zealios", "dactyl", "iris", "ergodox"];
var currentWord = words[Math.floor(Math.random() * 7)];
//correct letters are turned into underscores at the same length of the random word
for (var i = 0; i < currentWord.length; i++) {
  correctLetters.push("_");
}

//
function guess(letterGuessed) {
  //Once again the indexOf -1 blows my mind.
  //If it looks through and finds a letter that already exists in incorrectLetters then it will NOT produce a -1 value
  if (incorrectLetters.indexOf(letterGuessed) !== -1) {
  }

  //this -1 return value as part of the indexOf method was a game changer for my logic
  //the method will return -1 if the value/letter is not found in currentWord
  else if (currentWord.indexOf(letterGuessed) === -1) {
    incorrectLetters.push(letterGuessed);
    guessesLeft--;
    //if a correct letter was guessed then
  } else {
    for (var i = 0; i < currentWord.length; i++) {
      //this changes the underscore of correctLetters *AT* the spot it belongs in, aka where that letter is in currentWord
      if (correctLetters[i] === letterGuessed) {
      } else if (currentWord[i] === letterGuessed) {
        correctLetters[i] = letterGuessed;
        guessesLeft--;
      }
    }
  }
}

function checkScore() {
  //again the -1 of indexOf is a game changer for me
  //checks to see of any underscores are left, meaning the full word was guessed correctly
  if (correctLetters.indexOf("_") === -1) {
    wins++;
  } else if (guessesLeft === 0) {
    guessesLeft = 13;
    currentWord = words[Math.floor(Math.random() * 7)];
  }
}

function picture() {
  switch (currentWord) {
    case "planck":
  }
}

//on any keypress, start the game
document.onkeyup = function(event) {
  var letterGuessed = event.key;
  guess(letterGuessed);
  checkScore();
  console.log(letterGuessed);
  console.log(guessesLeft);
  console.log(correctLetters);
  console.log(incorrectLetters);
};
