window.addEventListener("load", init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "apple",
  "tesla",
  "tape",
  "automobile",
  "vonnegut",
  "microsoft",
  "artificial",
  "mountain",
  "notebook",
  "headphones",
  "university",
  "hat",
  "interpreter",
  "compilation",
  "compiler",
  "iphone",
  "samsung",
  "nokia",
  "program",
  "module",
  "collections",
  "transition",
  "objects",
  "keyword",
  "terminology",
  "hybrid",
  "machine",
  "source",
  "javascript",
  "language",
  "java",
  "python",
  "angular",
  "react",
  "perl",
  "scheme",
  "prolog",
  "markup",
  "structured",
  "data",
  "tensorflow",
  "register",
  "output",
  "input",
  "device",
  "logic",
  "inheritance",
  "polymorphism",
  "algorithm"
];

// Initialize Game
const init = () => {
  // Show number of seconds in header
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching word inputs
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countDown, 1000);
  // Check Game Status
  setInterval(checkStatus, 50);
}

// Start Match
const startMatch = () => {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
const matchWords = () => {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick and Show Random Word
const showWord = (words) => {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown Timer
const countDown = () => {
  // Check time is not out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // Show Time
  timeDisplay.innerHTML = time;
}

// Check Game Status
const checkStatus = () => {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
