const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const startAgainBtn = document.getElementById('start-again-btn');
const feedback = document.getElementById('feedback');
const attemptsSpan = document.getElementById('attempts');

let randomNumber;
let attempts = 0;


startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  gameContainer.style.display = 'flex';
  startNewGame();
});


checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsSpan.textContent = attempts;

  if (guess === randomNumber) {
    feedback.textContent = `თქვენ სწორად გამოიცანით ${attempts} ცდაში!`;
    checkBtn.disabled = true;
    checkBtn.style.display = 'none';
    startAgainBtn.style.display = 'inline-block';
  } else if (attempts >= 7) {
    feedback.textContent = `სამწუხაროდ, ვერ გამოიცანით. სწორი რიცხვი იყო ${randomNumber}.`;
    checkBtn.disabled = true;
    checkBtn.style.display = 'none';
    tryAgainBtn.style.display = 'inline-block';
  } else {
    feedback.textContent = guess < randomNumber ? "სცადეთ ახლიდან, თქვენ უნდა ჩაიფიქროთ უფრო მაღალი რიცხვი." : "სცადეთ თავიდან, თქვენ უნდა ჩაიფიქროთ უფრო დაბალი რიცხვი.";
  }
});


tryAgainBtn.addEventListener('click', () => {
  startNewGame();
});


startAgainBtn.addEventListener('click', () => {
  startNewGame();
});


function startNewGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsSpan.textContent = attempts;
  feedback.textContent = '';
  guessInput.value = '';
  checkBtn.disabled = false;
  checkBtn.style.display = 'inline-block';
  tryAgainBtn.style.display = 'none';
  startAgainBtn.style.display = 'none';
  console.log("New secret number:", randomNumber); 
}
