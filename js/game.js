// game.js

/****************************
 * 1) Sonnet Data (20 total)
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
  {
    text: `No whispers here, nor words of him be told, 
For shadows cling to halls where silence stays.  
The stars, once bright, now flicker dim and cold,  
While dread unseen doth haunt the weary days.  

A voice unheeded sings of what shall be,  
Yet none dare mark his tongue nor heed his sight.  
The earth shall crack, the sky shall cease to be,  
And still they dance, unmindful of his plight.  

The rats do scurry ‘neath the temple’s stone,  
As echoes call of what may yet unfold.  
A name unspoken, yet its weight is known,  
A fate entwined with prophecy of old.  

Be still thy tongue, let not his name be said,  
Or doom may strike and leave thy house unfed.`,
    answer: "we don’t talk about bruno",
    hint1: "Disney",
    hint2: "Encanto"
  },
  {
    text: `Behold the dawn, where crimson sun doth rise,  
And with its light, a golden future gleams.  
Upon the rock, ‘fore ever-watchful eyes,  
A child is raised, the heir of royal dreams.  

The beasts do bow, the earth itself doth quake,  
As all the stars their silent vigil keep.  
Yet time’s cruel hand shall soon the young forsake,  
For all who breathe must fall in endless sleep.  

The wheel must turn, the old must step aside,  
And lo, the new shall take its rightful throne.  
Yet heed thee well, for fate is not denied,  
What once was lost may yet again be known.  

The child is crowned, the stars do shine above,  
A king is born, and all shall bow in love.`,
    answer: "circle of life",
    hint1: "Disney",
    hint2: "Lion King"
  },
  {
    text: `Come take my hand, and I shall show thee more,  
Where light doth dance upon the silver tide.  
The walls that held thee fast shall be no more,  
For wonders wait where open skies abide.  

The earth below is small and dimly wrought,  
Yet lo, above, a realm of endless hue.  
Let not thy fear restrain thy soaring thought,  
For what dost lie beyond is bright and new.  

Dost thou not feel the wind upon thy brow?  
Dost thou not taste the breath of boundless air?  
A world unchained is open to thee now,  
If thou dost dare to leave thy cage of care.  

A shining land where dreams take wing anew,  
A path unknown, yet bright with golden view.`,
    answer: "a whole new world",
    hint1: "Disney",
    hint2: "Aladdin"
  },
  {
    text: `Thou dost not see what treasures lie below,  
Beneath the foam where sun doth kiss the sea.  
O foolish men, thy toil doth bring thee woe,  
Whilst here we dance, unchained and ever free.  

The waters gleam with pearls in endless light,  
The coral sings where golden fishes play.  
No storm nor fire dost plague our world so bright,  
For mirth and song do fill each happy day.  

Above, thy land is bound by weight and care,  
Yet here, the tide doth wash all strife away.  
No soil nor stone dost hold thee in despair,  
So cast thy chains, come forth, and ever stay.  

The land is dry, the labor harsh and vain,  
Yet in the deep, thou never shalt know pain.`,
    answer: "under the sea",
    hint1: "Disney",
    hint2: "a life below waves"
  },
  {
    text: `A rose doth bloom within the shadow’s keep,  
Where once was cold, now warmth begins to grow.  
The beastly hand, once feared, now doth not creep,  
But soft with care, it learns to cherish so.  

No mirror bright could show what lies inside,  
No silken thread could weave a love so rare.  
A heart once locked, now opens free and wide,  
For beauty shines beyond what eyes may bear.  

The walls do fall, the frozen halls do melt,  
As kindness soothes where rage once held its reign.  
A love unlooked for, yet so deeply felt,  
Dost turn to light what once was wrapped in pain.  

A curse now lifts, where love doth show its face,  
For hearts once changed may break the dark embrace.`,
    answer: "beauty and the beast",
    hint1: "Disney",
    hint2: "love softens"
  },
  {
    text: `When friendship's hand dost clasp thy weary own,  
And in thine hour of woe thou dost despair,  
Forget not this: thou art not left alone,  
For ever shall I stand beside thee there.  

When tempests howl and fortune turns her face,  
When darkness veils the road that lies ahead,  
My step shall match thee, steady in thy pace,  
And ne’er shall bonds of trust be cut or shed.  

Though distance far may pull our paths apart,  
No time nor tide can sever what we weave.  
For what is stitched within the faithful heart,  
Doth ne’er depart nor leave thee lone to grieve.  

In weal or woe, my faith shall not decay,  
For by thy side I walk both night and day.`,
    answer: "you’ve got a friend in me",
    hint1: "Disney",
    hint2: "Toy Story"
  },
  {
    text: `O weary guest, cast off thy weary frown,  
For thou art welcome at this noble feast!  
Unbind thy cloak, set all thy burdens down,  
And taste delights that never shall be ceased.  

A cup doth brim, a dish doth steam so bright,  
A host most proud now bids thee take thine ease.  
The candles gleam with such resplendent light,  
That mortal cares do fade with greatest peace.  

No king nor lord doth set this banquet grand,  
Yet every plate dost glow with royal hue.  
Come feast, my friend, let mirth take up thy hand,  
And marvel at the wonders set for you!  

So sit thee down, let joy now take its flight,  
For all are served with cheer this golden night.`,
    answer: "be our guest",
    hint1: "Disney",
    hint2: "Beauty and Beast"
  },
  {
    text: `O dost thou see the world through eyes so dim,
That thou dost think the earth is but thine own?
The rivers, trees, and winds dost not serve him
Who dares to claim their bounty as his throne.

O foolish heart, who looks with jaded sight,
And knows not what the painted heavens tell!
The voices in the leaves do speak of right,
And murmur wisdom in the brooks that swell.

Dost thou not hear the colors in the air,
That dance beyond what narrow mind may frame?
The earth and sky do sing with voices fair,
And none doth rule this land nor stake his claim.

For they who see with eyes so small and weak,
Shall never hear the colors when they speak.`,
    answer: "colors of the wind",
    hint1: "Disney",
    hint2: "Paint with colors"
  },
  {
    text: `When night doth fall upon the forest grand,
And all doth rest in hush’d and solemn peace,
A golden glow doth light the silver sand,
Where hearts in longing find their sweet release.

A whispered hush, a love so soft and true,
That all the stars do marvel at its grace.
No word needst speak, for they dost surely view
The tender vow writ plain upon thy face.

No kingdom great nor wealth can hold this bliss,
Nor royal claim compare to such embrace.
For all is well, and all is naught amiss,
When two do stand in love’s enchanted space.

No doubts remain, no fears dost take their flight,
For love alone dost rule this sacred night.`,
    answer: "can you feel the love tonight",
    hint1: "Disney",
    hint2: "Elton John"
  },
  {
    text: `O simple joys, dost thou not see their grace?
A life untroubled, free from weary care.
No coin nor gold dost set a merry pace,
But simple pleasures bright beyond compare.

A gentle breeze, a branch that bends with ease,
A sunbeam warm upon a lazy head.
No weight of toil dost linger ‘neath the trees,
For in the shade, all worries soon have fled.

A hunger mild is answered swift and true,
No feast nor fowl dost need to mend thy cheer.
A honeyed treat dost make the world anew,
And all is light where laughter fills the ear.

Forget thy woes, let troubles slip away,
For life is best when lived in mirth and play.`,
    answer: "the bare necessities",
    hint1: "Disney",
    hint2: "Jungle Book"
  },
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