
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const gameOver = document.querySelector('.game-over');
const game = document.querySelector('.container');
const endScore =document.querySelector('.end-score');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 11;


// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time;

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver.style.display='flex';
    game.style.display ="none";
  endScore.innerHTML=`<p>your score is :${score}</p>`


   
  }
}



addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';
    time +=2; 

    
    updateTime();
  }
});

