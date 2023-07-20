// ===>   NOTE: comment out each Question section before checking the output in the terminal.

let prompt = require("prompt-sync")({ sigint: true });

// ********************* Question 1 ************************

//********************Number guessing game***********

const secretNumber = Math.floor(Math.random() * 50) + 1;
console.log(secretNumber)
let numGuesses = 0;
const maxNumAttempts = 5;

// To Start the game
console.log("Guess a secret number between 1 and 50.");

//Loop through the number of attempt
for (let i = 1; i <= maxNumAttempts; i++) {
  const guess = parseInt(prompt("Enter your guess: "));

  if (isNaN(guess) || guess < 1 || guess > 50) {
    console.log("Invalid guess. Please enter a number between 1 and 50.");
    i--;
    continue;
  }

  numGuesses++;

  if (guess === secretNumber) {
    console.log("Congratulations! You guessed the secret number.");
    console.log(`Number of guesses: " + ${numGuesses}`);
    break;
  } else if (numGuesses === maxNumAttempts) {
    console.log("Sorry, you didn't guess the secret number.");
    console.log(`The secret number was: " + ${secretNumber}`);
  } else if (guess < secretNumber) {
    console.log("Try again! The secret number is higher.");
  } else {
    console.log("Try again! The secret number is lower.");
  }
}

// ********************* Question 2 ************************

// inputing a num until a negative number(i.e number less than 0) is input

let sum = 0;
console.log(
  "Enter numbers in a repeated format and then enter a negative number toget the sum "
);
while (true) {
  const number = parseInt(prompt("Enter a number: "));

  if (number < 0) {
    break;
  }

  sum += number;
}

console.log("The sum of all entered numbers is: ", sum);

// ********************* Question 3 ************************

let name = '';

while (name !== "END") {
  name = prompt('Enter a name (or "END" to finish):');
  if (name !== "END") {
    console.log(name);
  }
}

console.log("I am done.");



// ********************* Question 4 ************************

let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++) {
  // Iterating 10 times
  let multiple = n * i;
  console.log(multiple);
}