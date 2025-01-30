// game.js

/****************************
 * 1) Sonnet Data (10 total)
 ****************************/
const sonnets = [
  {
    text: `I’ve gazed upon these waters countless days,
Uncertain why their call so fills my mind;
A daughter bound by duty’s gracious ways,
Yet ever to the shore I feel inclined.
Each turning path, each winding trail I roam,
Returns me to this edge I cannot flee;
A voice within me stirs, it bids me roam,
Though all about me guard their roles with glee.
I long to find the line ’twixt sky and sea,
Where shining waves invite a bolder stride;
And if the winds in friendly course should be,
Perhaps I’ll learn what wonders there abide.
Who knows the bounds my heart’s bold quest may show?
In time I’ll learn how far my steps may go.`,
    answer: "how far i'll go",
    hint1: "Disney",
    hint2: "Lin Manuel Miranda"
  },
  {
    text: `I view false crowns upon unworthy men,
Their cunning airs do reek of hollow pride;
In Compton’s realm our might doth keep its den,
While birds of prey attempt to stand beside.
They crouch in darkness, thirsting for the young,
Through subtle guile they ply their wanton ways;
They claim the throne with borrowed songs ill-sung,
Yet truth doth glare and sets their boasts ablaze.
What vain illusions swirl in that false crest,
That owl of trick’ry swiftly meets his fall;
Our city roars, the boogeyman confess’d,
No wretch shall claim dominion over all.
They be not like us—our brand stands untamed,
So quake in fear; ’tis I who rule the game.`,
    answer: "not like us",
    hint1: "Released in 2024",
    hint2: "Kendrick Lamar"
  },
  {
    text: `I do lead forth my horse on time-worn way,
And vow to roam ’til I no more abide;
My hat and boots in ebon hue display,
Across these plains, in dust my fortunes ride.
No mortal wisdom e’er shall bid me nay;
I brandish yonder steed with fearless heart;
While others flaunt their gilded carts astray,
For in this realm, my nature stands apart.
My life doth play like some outlandish plot,
With jousts and feasts and merry scandal bold;
For though I strayed from she who prized me not,
My drapings wrought in splendor manifold.
No mortal voice shall these my wand’rings scold,
I ride ’til spent on roads of ages old.`,
    answer: "old town road",
    hint1: "Featuring a Cyrus",
    hint2: "Lil Nas X"
  },
  {
    text: `With Yuletide nigh, I crave but one true thing,
No trifling gift nor bauble shall suffice;
The longing in my heart thy love doth bring,
For thou alone art all I’d sacrifice.
’Neath laden boughs, I care not for their store,
Nor doth a stocking brimmed with trinkets please;
I yearn instead to clasp thee evermore,
That thou might stand beside my festive trees.
I scorn to wake old Claus with written plea,
Nor pine for snow in winter’s frosty hush;
In truth, ’tis only thou I wish to see,
Thy presence all my Yuletide hopes to crush.
So grant me thee, the boon my spirit knows,
Thy form, my gift, when Christmas morn bestows.`,
    answer: "all i want for christmas is you",
    hint1: "Christmas",
    hint2: "Mariah Carey"
  },
  {
    text: `Thy nightly thoughts revolve around my grace,
As though a midnight brew doth lead thee on;
No dream nor rest can quell this fervent chase,
I sense thy zeal e’en when the dusk is gone.
We shift our dance from left to right in flair,
As though a cunning device doth stir our feet;
No trifling dross can quell my jester’s air,
I reign enthroned where wit and grace do meet.
Thy former suitor’s charms were pale at best,
He ne’er awakened dawn in hopes so bright;
But I, like potent brew, stir hearts unblest,
And claim thy thoughts beneath the hush of night.
So yield to me, that sweet espresso taste,
Which stirs thy nights in rapture yet unchaste.`,
    answer: "espresso",
    hint1: "Released in 2024",
    hint2: "Sabrina Carpenter"
  },
  {
    text: `I vow the throne shall soon become mine own,
Though watchers scoff within this regal hall;
No trifling doubt can quell my rising tone,
Nor hush the youthful might that heeds my call.
For none shall say “Do this,” or track my seat,
Though guardians fret, I’d break these cautious ties;
I stretch from dawn to dusk on bounding feet,
Unshackled steps that claim the open skies.
No counsel from a hornbill shall remain,
When I, in roaring grace, survey my pride;
All creatures stand, compelled within my reign,
They bow in awe, their homage cast aside.
With colors left and right, I take the stage,
For I must rule as king in this bright age.`,
    answer: "i just cant wait to be king",
    hint1: "Disney",
    hint2: "Elton John"
  },
  {
    text: `My mornings dwell in Monday’s bleak domain,
Where nights conspire in gloom no dawn can still;
For half a month my longing must remain,
And in this hush, I pace a stifled room.
I see thee near, beyond my garden wall,
Yet by thy spouse, my heart is pressed despair;
For in our fleeting bond, I heed the call,
Though parted now, my thoughts in secret fare.
Two weeks of rapture left a lasting taste,
A quiet treason sealed within my veins;
Now Monday dawns are ever left to waste,
As winter gloom in all my hours remains.
For love once touched in that brief fortnight’s vow
Doth plague me still and will not free me now.`,
    answer: "fortnite",
    hint1: "Released in 2024",
    hint2: "Taylor Swift"
  },
  {
    text: `When shall these distant colonies arise?
Arise, I cry, to break the tyrant’s chain;
For in my mind, grim death before me lies,
A mem’ry forged from sorrow’s biting strain.
Shall doom approach me soon, or let me be,
As though a tune were stilled in hush of night?
Ne’er thought I’d pass two decades roaming free,
Yet thirst for freedom spurs my soul to fight.
As Moses led, we seek our promised land,
By carving paths no king dare rend in twain;
We scorn the yoke of those who’d rule unplanned,
A rising tide no throne can now restrain.
Then heed my cry, I shall not waste my lot,
Nor cast aside this chance—my one true shot.`,
    answer: "my shot",
    hint1: "Modern Musical",
    hint2: "Lin Manuel Miranda"
  },
  {
    text: `Freed from all worry, we in mirth abide,
A welcome refuge from the fretful day;
A motto sweet, by which we laugh and guide,
Banish the gloom that stalks our hearts away.
One soul, once plagued by self’s unwelcome scent,
Learns to dismiss the past and dance anew;
In friendly bonds, all burdens are content,
And songs of ease our roving spirits woo.
Another, young at heart, with doubts in tow,
Now finds a cheerful clan who light the way;
Each jest or quip prevents encroaching woe,
And gilds the hours with sun-kissed holiday.
Thus do we sing this chant from dawn till night:
Where troubles fade, we bask in joy so bright.`,
    answer: "hakuna matata",
    hint1: "Disney",
    hint2: "Elton John"
  },
  {
    text: `Hence, watch me dance with joyous, lively grace,
Or else thou’lt miss the rapture I embrace;
Taste thou the hush that draws me to this place,
That I might gain the warmth thou wouldst retrace.
Of trifling crowns I want not any part,
Great hopes instead, I dance beneath the sky;
O city bright, thou keep’st me at thy heart,
High notes that soar, in midnight’s hush, they fly.
Oft do I rouse the crowd with snap and clap,
To spin in measured arcs upon the ground;
That shrieks erupt, though dawn might close the tap,
O would these twirls remain in echo’d sound.
Grant me the feast for which my heart has yearned,
Or see me whisked away, with passions burned.`,
    answer: "hot to go!",
    hint1: "Released 2023",
    hint2: "Chappel Roan"
  }
];

/****************************
 * 2) Shuffle array
 ****************************/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(sonnets);

/****************************
 * 3) Game State
 ****************************/
// Start at 20 points
let currentIndex = 0;
let score = 20;
let usedHint1 = false;
let usedHint2 = false;

// +10 for correct, -5 for wrong/hints
const correctFeedback = [
  "Correct! +10pts",
  "Brilliant! +10pts",
  "Nicely done! +10pts",
  "Right on! +10pts"
];
const wrongFeedback = [
  "Sorry, try again -5pts",
  "Nice try, but try again -5pts",
  "Not quite -5pts",
  "Incorrect! -5pts"
];

/****************************
 * 4) DOM Elements
 ****************************/
const answerFeedbackOverlay = document.getElementById("answerFeedbackOverlay");
const answerFeedbackContent = document.getElementById("answerFeedbackContent");

const gameOverOverlay = document.getElementById("gameOverOverlay");
const finalScoreEl = document.getElementById("finalScore");

const sonnetNumberHeading = document.getElementById("sonnetNumberHeading");
const sonnetTextEl = document.getElementById("sonnetText");
const answerInput = document.getElementById("answerInput");
const scoreDisplay = document.getElementById("scoreDisplay");

const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const endGameBtn = document.getElementById("endGameBtn");

const hint1Box = document.getElementById("hint1Box");
const hint1Label = document.getElementById("hint1Label");
const hint2Box = document.getElementById("hint2Box");
const hint2Label = document.getElementById("hint2Label");

/****************************
 * 5) Initialize
 ****************************/
loadSonnet();
updateScore();

/****************************
 * 6) Event Listeners
 ****************************/
// Submit button
submitAnswerBtn.addEventListener("click", submitAnswer);
// End game button
endGameBtn.addEventListener("click", triggerGameOver);
// Hints
hint1Box.addEventListener("click", () => {
  if (!usedHint1) {
    showHintPenalty(hint1Label, sonnets[currentIndex].hint1);
    usedHint1 = true;
    hint2Box.classList.remove("disabled");
  }
});
hint2Box.addEventListener("click", () => {
  if (!usedHint2 && usedHint1) {
    showHintPenalty(hint2Label, sonnets[currentIndex].hint2);
    usedHint2 = true;
  }
});
// Enter key
answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitAnswer();
  }
});

/****************************
 * 7) Main Functions
 ****************************/
function loadSonnet() {
  if (currentIndex >= sonnets.length) {
    triggerGameOver();
    return;
  }
  usedHint1 = false;
  usedHint2 = false;

  // Reset hint labels
  hint1Label.style.color = "#800080";
  hint1Label.textContent = "Hint 1";
  hint2Label.style.color = "#800080";
  hint2Label.textContent = "Hint 2";
  hint2Box.classList.add("disabled");

  // Display new sonnet
  const currentSonnet = sonnets[currentIndex];
  sonnetNumberHeading.textContent = `Sonnet #${currentIndex + 1}`;
  sonnetTextEl.textContent = currentSonnet.text;
  answerInput.value = "";
}

function submitAnswer() {
  let userGuess = stripAndLower(answerInput.value);
  if (!userGuess) {
    showAnswerFeedback("Please enter a guess!", "#000");
    return;
  }

  let correctAnswer = stripAndLower(sonnets[currentIndex].answer);

  if (userGuess === correctAnswer) {
    let msg = randomItem(correctFeedback);
    showAnswerFeedback(msg, "#00FF00"); // bright green text
    score += 10;
    updateScore();
    if (score <= 0) {
      triggerGameOver();
      return;
    }
    // Move on only if correct
    currentIndex++;
    loadSonnet();
  } else {
    let msg = randomItem(wrongFeedback);
    showAnswerFeedback(msg, "red");
    score -= 5;
    updateScore();
    if (score <= 0) {
      triggerGameOver();
      return;
    }
    // Stay on same sonnet if wrong
  }
}

function showHintPenalty(labelEl, hintText) {
  score -= 5;
  updateScore();
  if (score <= 0) {
    triggerGameOver();
    return;
  }

  // Show '-5pts' in red for 1s
  labelEl.style.color = "red";
  labelEl.textContent = "-5pts";
  setTimeout(() => {
    labelEl.style.color = "#000";
    labelEl.textContent = hintText;
  }, 1000);
}

function triggerGameOver() {
  finalScoreEl.textContent = score;
  gameOverOverlay.style.display = "flex";
  localStorage.setItem("tempScore", score.toString());

  // After 2s, redirect
  setTimeout(() => {
    window.location.href = "scoreboard.html";
  }, 2000);
}

function updateScore() {
  scoreDisplay.textContent = score;
}

/****************************
 * 8) Utility Functions
 ****************************/
function stripAndLower(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showAnswerFeedback(message, color) {
  answerFeedbackContent.textContent = message;
  answerFeedbackContent.style.color = color;
  answerFeedbackOverlay.style.display = "flex";
  setTimeout(() => {
    answerFeedbackOverlay.style.display = "none";
  }, 2000);
}
