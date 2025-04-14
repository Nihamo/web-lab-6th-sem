const word = ['F', 'O', 'X']; 
let guessedLetters = ['_', '_', '_'];
let guessedSoFar = [];
let reward = 0;
let hangman = 0;
const maxWrongGuesses = 6;

function guessLetter() {
  const input = document.getElementById('letterInput');
  let guess = input.value.toUpperCase();
  input.value = '';

  if (!guess || guess.length !== 1 || !/[A-Z]/.test(guess)) {
    alert('Please enter a valid letter!');
    return;
  }

  if (guessedSoFar.includes(guess)) {
    document.getElementById('message').textContent = `You already guessed "${guess}". Try another!`;
    return;
  }

  guessedSoFar.push(guess);
  let found = false;
  let matches = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess && guessedLetters[i] === '_') {
      guessedLetters[i] = guess;
      found = true;
      matches++;
    }
  }

  let rewardChange = Math.floor(Math.random() * 100) + 1;

  if (found) {
    reward += rewardChange * matches;
    document.getElementById('message').textContent = `Good guess! ${guess} found! (+$${rewardChange * matches})`;
  } else {
    reward -= rewardChange;
    hangman++;
    document.getElementById('message').textContent = `Wrong guess. (-$${rewardChange})`;
  }

  document.getElementById('displayWord').textContent = guessedLetters.join(' ');
  document.getElementById('reward').textContent = `Current Reward: $${reward}`;
  document.getElementById('hangmanStatus').textContent = `Wrong Attempts: ${hangman}/${maxWrongGuesses}`;

  if (!guessedLetters.includes('_')) {
    document.getElementById('message').textContent = `🎉 You won! Final reward: $${reward}`;
    disableGame();
  }

  if (hangman >= maxWrongGuesses) {
    document.getElementById('message').textContent = `💀 You lost! The word was "${word.join('')}".`;
    disableGame();
  }
}

function disableGame() {
  document.getElementById('letterInput').disabled = true;
  document.querySelector('button').disabled = true;
}
