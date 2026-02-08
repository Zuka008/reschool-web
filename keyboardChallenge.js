//dom elementebis wamogeba
const letterDiv = document.getElementById("letter");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");
const gameBtn = document.getElementById("start");
const feedbackDiv = document.getElementById("feedback");
const difficultyHintDiv = document.getElementById("difficulty-hint");
const difficultySelect = document.getElementById("difficulty");
const penaltyCheckbox = document.getElementById("penalty");

//game state cvladebi
let score = 0;
let time = 0;
let timer;
let gameRunning = false;
let currentTarget = "";
let currentInput = "";

//arrays(short and long words)
let shortPool = [];
let longPool = [];

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // easy mode letters

// Short words (normal difficulty)
const shortWords = [
  "CAT","DOG","SUN","MOON","STAR","TREE","FISH","BIRD",
  "FIRE","WIND","ROCK","WAVE","SNOW","RAIN","BOOK","GAME",
  "CODE","FAST","SLOW","SHIP","KING","LION","WOLF","BEAR",
  "FROG","DUCK","SHIP","RING","BALL","GOAL","JUMP","RUN",
  "BLUE","PINK","GOLD","SILK","MILK","SAND","FOAM","LAMP"
];

// Long words (hard difficulty)
const longWords = [
  "KEYBOARD","FUNCTION","JAVASCRIPT","COMPUTER","PROGRAM",
  "LANGUAGE","VARIABLE","ELEMENT","PROJECT","DEVELOPER",
  "INTERNET","SOFTWARE","HARDWARE","DATABASE","NETWORK",
  "ALGORITHM","COMPILER","DOCUMENT","MONITOR","PRINTER",
  "KEYFRAME","ANIMATE","BROWSER","PACKAGE","MODULE",
  "VERSION","CONTROL","PROCESS","STORAGE","MEMORY",
  "DISPLAY","SCANNER","ROUTER","SERVER","CLIENT",
  "REQUEST","RESPONSE","HANDLER","CONSOLE","DEBUGGER"
];

// dro da qula titoeul sirtuleze
const difficulties = {
  easy: { time: 45, required: 25 },
  normal: { time: 35, required: 20 },
  hard: { time: 30, required: 15 },
  insane: { time: 45, required: 12 }
};

// Display timer
window.addEventListener("DOMContentLoaded", () => {
  const difficulty = difficultySelect.value;
  timerDiv.textContent = `Time: ${difficulties[difficulty].time}s`;
});

// array-dan sityvebis areva
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Flash letter color
function flash(color) {
  letterDiv.style.color = color;
  setTimeout(() => (letterDiv.style.color = "#ff6f61"), 150);
}

// random strings for insane mode
function generateRandomString(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result.toUpperCase();
}

//letters and words for each difficulty
function nextTarget() {
  const difficulty = difficultySelect.value;
  if (difficulty === "easy") currentTarget = letters[Math.floor(Math.random() * letters.length)];
  if (difficulty === "normal") {
    if (shortPool.length === 0) shortPool = shuffleArray([...shortWords]);
    currentTarget = shortPool.pop();
  }
  if (difficulty === "hard") {
    if (longPool.length === 0) longPool = shuffleArray([...longWords]);
    currentTarget = longPool.pop();
  }
  if (difficulty === "insane") currentTarget = generateRandomString(Math.floor(Math.random() * 5) + 8);
  currentInput = "";
  letterDiv.textContent = currentTarget;
}

// qulebis update
function updateScore() {
  scoreDiv.textContent = `Score: ${score}`;
}

// Start game  function
function startGame() {
  const difficulty = difficultySelect.value;
  score = 0; updateScore();
  time = difficulties[difficulty].time;
  timerDiv.textContent = `Time: ${time}s`;
  feedbackDiv.textContent = "";
  difficultyHintDiv.textContent = "";
  gameRunning = true;
  shortPool = shuffleArray([...shortWords]);
  longPool = shuffleArray([...longWords]);
  nextTarget();

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timerDiv.textContent = `Time: ${time}s`;
    if (time <= 0) endGame(score >= difficulties[difficulty].required);
  }, 1000);
  gameBtn.textContent = "End Game";
}

// end game function
function endGame(success) {
  gameRunning = false; 
  clearInterval(timer);
  gameBtn.textContent = "Start";

  const levels = ["easy","normal","hard","insane"];
  let index = levels.indexOf(difficultySelect.value);
  difficultyHintDiv.innerHTML = "";

  if (success) {
    if (difficultySelect.value === "insane" && penaltyCheckbox.checked)
      feedbackDiv.textContent = "🏆 Keyboard legend! Insane difficulty with Penalty mastered!";
    else if (difficultySelect.value === "insane")
      feedbackDiv.textContent = "🔥 Insane complete! You are a keyboard master!";
    else feedbackDiv.textContent = "🔥 You won! Too easy? Increase difficulty!";

    if (index < levels.length - 1)
      difficultyHintDiv.innerHTML = `<button onclick="changeDifficulty('harder')">Increase Difficulty</button>`;
  } else {
    feedbackDiv.textContent = "💀 You lost! Try again or decrease difficulty.";
    if (index > 0)
      difficultyHintDiv.innerHTML = `<button onclick="changeDifficulty('easier')">Decrease Difficulty</button>`;
  }
}

// increase/decrease buttonebit difficultis shecvla
function changeDifficulty(direction) {
  const levels = ["easy","normal","hard","insane"];
  let index = levels.indexOf(difficultySelect.value);
  if (direction === "harder" && index < levels.length - 1) index++;
  if (direction === "easier" && index > 0) index--;
  difficultySelect.value = levels[index];
  const difficulty = difficultySelect.value;
  timerDiv.textContent = `Time: ${difficulties[difficulty].time}s`;
  scoreDiv.textContent = "Score: 0";
  feedbackDiv.textContent = "";
  difficultyHintDiv.textContent = "";
}

// Start / End button click handler
gameBtn.addEventListener("click", () => {
  if (!gameRunning) startGame();
  else endGame(score >= difficulties[difficultySelect.value].required);
});

// Handle user key input
document.addEventListener("keydown", (e) => {
  if (!gameRunning) return;

  const key = e.key.toUpperCase();
  const difficulty = difficultySelect.value;
  const penalty = penaltyCheckbox.checked;

// easy difficultistvis 
  if (difficulty === "easy") { 
    if (key === currentTarget) { score++; flash("darkgreen"); }
    else { if (penalty) score = Math.max(0, score - 1); flash("crimson"); }
    updateScore();
    nextTarget();
    return;
  }

  //tu full word gvaqvs
  currentInput += key;
  if (!currentTarget.startsWith(currentInput)) {
    if (penalty) score = Math.max(0, score - 1);
    updateScore();
    flash("crimson");
    nextTarget();
    return;
  }

  // Highlight typed part
  letterDiv.innerHTML = `<span style="color:darkgreen">${currentInput}</span>` + currentTarget.slice(currentInput.length);

  if (currentInput === currentTarget) {
    score++;
    updateScore();
    flash("darkgreen");
    nextTarget();
  }
});

// Update timer if difficulty changed without starting
difficultySelect.addEventListener("change", () => {
  if (!gameRunning) {
    const difficulty = difficultySelect.value;
    timerDiv.textContent = `Time: ${difficulties[difficulty].time}s`;
    scoreDiv.textContent = "Score: 0";
    feedbackDiv.textContent = "";
    difficultyHintDiv.textContent = "";
  } else { 
    endGame(score >= difficulties[difficultySelect.value].required);
  }
});
