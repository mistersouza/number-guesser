// global variables
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// this generates a random number between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// this function gets the absolute distance between the target and the guess
const getAbsoluteDistance = (targetGuess, guess) => {
    return Math.abs(targetGuess - guess);
}

// this is the function that will be called each round to determine which guess is closest to the target number.
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a number between 0 and 9');
    } else {
        const humanDifference = getAbsoluteDistance(targetGuess, humanGuess);
        const computerDifference = getAbsoluteDistance(targetGuess, computerGuess);
        return humanDifference <= computerDifference;
    }
}

// this function will be used to increase the winner’s score after each round.
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else {
        computerScore++; 
    }
}

// this function will be used to update the round number after each round.
const advanceRound = () => currentRoundNumber++;