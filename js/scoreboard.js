// scoreboard.js

// DOM elements
const playerNameInput = document.getElementById("playerName");
const submitScoreBtn = document.getElementById("submitScoreBtn");
const finalScoreDisplay = document.getElementById("finalScoreDisplay");
const highScoresList = document.getElementById("highScoresList");

const feedbackInput = document.getElementById("feedbackInput");
const submitFeedbackBtn = document.getElementById("submitFeedbackBtn");

// Retrieve finalScore from localStorage
let finalScore = localStorage.getItem("tempScore");
if (finalScore === null) {
  finalScore = "N/A";
}
finalScoreDisplay.textContent = finalScore;

// Basic profanity list
const BAD_WORDS = [
  "dick","penis","p3nis","p3n15","shit","fuck","fuk","cunt","whore","slut",
  "bitch","f4g","nigg","n1gg","kike","c0ck","cock","pussy","asshole","jizz",
  "cum","faggot"
];

function isProfane(name) {
  let cleaned = name
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
  for (let bad of BAD_WORDS) {
    if (cleaned.includes(bad)) {
      return true;
    }
  }
  return false;
}

// Retrieve existing high scores
function getHighScores() {
  return JSON.parse(localStorage.getItem("shakespeareHighScores")) || [];
}

// Save a new score
function saveScore(name, score) {
  const highScores = getHighScores();
  const newEntry = { name, score: parseInt(score, 10) };
  highScores.push(newEntry);
  // sort desc
  highScores.sort((a,b) => b.score - a.score);
  // Keep top 10
  if (highScores.length > 10) {
    highScores.splice(10);
  }
  localStorage.setItem("shakespeareHighScores", JSON.stringify(highScores));
}

// Display scores
function displayScores() {
  const scores = getHighScores();
  highScoresList.innerHTML = "";
  scores.forEach((entry) => {
    const scoreItem = document.createElement("div");
    scoreItem.classList.add("score-item");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("player-name");
    nameDiv.textContent = entry.name;

    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("player-score");
    scoreDiv.textContent = entry.score;

    scoreItem.appendChild(nameDiv);
    scoreItem.appendChild(scoreDiv);
    highScoresList.appendChild(scoreItem);
  });
}

submitScoreBtn.addEventListener("click", () => {
  // If finalScore is "N/A" or was already used
  if (finalScore === "N/A") {
    alert("No score available to log.");
    return;
  }
  // If finalScore is "0", block logging
  if (parseInt(finalScore, 10) === 0) {
    alert("You scored 0, so you cannot log a score.");
    return;
  }

  const nameVal = playerNameInput.value.trim();
  if (!nameVal) {
    alert("Please enter a valid name (up to 15 characters).");
    return;
  }
  if (isProfane(nameVal)) {
    alert("Inappropriate name detected. Please choose another name.");
    return;
  }

  // Save and display
  saveScore(nameVal, finalScore);
  displayScores();

  // Remove tempScore to prevent spamming
  localStorage.removeItem("tempScore");
  finalScore = "N/A";

  playerNameInput.value = "";
});

// Initialize scoreboard
displayScores();

/********************************************
 * Feedback Form
 ********************************************/
function getFeedbackLogs() {
  return JSON.parse(localStorage.getItem("feedbackLogs")) || [];
}

function saveFeedback(message) {
  const logs = getFeedbackLogs();
  const newLog = {
    message,
    timestamp: new Date().toISOString()
  };
  logs.push(newLog);
  localStorage.setItem("feedbackLogs", JSON.stringify(logs));
}

submitFeedbackBtn.addEventListener("click", () => {
  const feedbackVal = feedbackInput.value.trim();
  if (!feedbackVal) {
    alert("Please enter your feedback before submitting.");
    return;
  }
  saveFeedback(feedbackVal);
  alert("Thank you for your feedback!");
  feedbackInput.value = "";
});
