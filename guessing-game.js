const readline = require("readline");


// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



  let secretNumber;
  let askAttempts;

  askAttemptLimit()
  // ask the user a question

  function askAttemptLimit() {
    rl.question("How many attempts would you like?", function (answer) {
      askAttempts = Number(answer);
      askRange();
    })
  };


  function askRange() {
    rl.question("Enter a maximum number", function (answer) {
      let maximumNum = Number(answer);
      rl.question("Enter a minimum number..", function (answer) {
        let minimumNum = Number(answer);
        console.log(`Choose a number between ${maximumNum} and ${minimumNum}`);
        secretNumber = randomInRange(minimumNum, maximumNum);
        askGuess();
      })
    })
  };



  function askGuess() {
  rl.question("Enter a Guess! ", function (answer) {

    let num = Number(answer);

  if (checkGuess(num)) {
    console.log("Correct!!")
    rl.close();
  } else if (askAttempts === 1) {
    console.log("You've lost...");
    rl.close();
  } else {
    askGuess()
    askAttempts--;
  }
  })
};


const checkGuess = (guess) => {
  if (Number(guess) < secretNumber) {
    console.log("Too low.");
    return false;
  } else if (Number(guess) > secretNumber) {
    console.log("Too high!");
    return false;
  } else {
    return true;
  }
};

function randomInRange (min, max) { // both inclusive, integer, min < max
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}