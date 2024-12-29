const randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = null;

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Guess the number between 1 and 10:"), 10);

    if (userGuess < randomNumber) {
        alert("Too low! Try again.");
    } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
    } else if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
    } else {
        alert("Please enter a valid number.");
    }
}