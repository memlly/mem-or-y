'use strict';

// Declare function to toggle between instructions and game.
function toggleGame() {
  var gameBtn = document.getElementById('game-btn');

  if (gameBtn.textContent === 'Play Game') {
    gameBtn.textContent = 'Instructions';
  } else if (gameBtn.textContent === 'Instructions') {
    gameBtn.textContent = 'Play Game';
  }

  document.getElementById('game-info').classList.toggle('hidden');
  document.getElementById('game-display').classList.toggle('hidden');
}

// Declare arrays for cards / card sequence.
var colorCards = [];
var cardSequence = [];

// Declare constructor for cards.
function Card(index = 0) {
  this.index = index;
  colorCards.push(this);
}

// Declare render method for Card instances.
Card.prototype.render = function() {
  var cardContainer = document.getElementById('card-container');
  var newCard = document.createElement('div');
  newCard.classList.add('color-card');
  cardContainer.appendChild(newCard);
};

// Generate initial random sequence.
function initSequence() {
  for (let i = 0; i < colorCards.length; i++) {
    cardSequence.push(Math.floor(Math.random() * colorCards.length));
  }
  cardSequence.forEach(performSequence);
}

function performSequence(sequenceIndex) {
  for (let i = 0; i < colorCards.length; i++) {
    if (colorCards[i].index === sequenceIndex) {
      console.log(`Color Card index #: ${i}`);
    }
  }
}

// Declare event listener for the game button.
document.getElementById('game-btn').addEventListener('click', toggleGame);

// Create and render four initial Card instances.
for (let i = 0; i < 4; i++) {
  new Card(i).render();
}

initSequence();
