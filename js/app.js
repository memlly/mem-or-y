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

// Declare arrays for cards, card sequence, and clicked cards.
var colorCards = [];
var cardSequence = [];
var clickedCards = [];

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
  newCard.id = this.index;
  cardContainer.appendChild(newCard);
};

// Generate initial random sequence.
function initSequence() {
  for (let i = 0; i < colorCards.length; i++) {
    cardSequence.push(Math.floor(Math.random() * colorCards.length));
  }
  performSequence();
}

// Declare function that flashes Card elements in sequence.
function performSequence() {
  for (let i = 0; i < cardSequence.length; i++) {
    let timer = i;
    let cardIndex = cardSequence[i];
    let cardID = document.getElementById(colorCards[cardIndex].index);
    setTimeout(function() {
      cardID.style.backgroundColor = 'yellow';
      setTimeout(function() {
        cardID.style.backgroundColor = 'blue';
      }, 500);
    }, 1000 * (timer + 1));
  }
}

// Declare event listener for the game button.
document.getElementById('game-btn').addEventListener('click', toggleGame);

// Create and render four initial Card instances.
for (let i = 0; i < 4; i++) {
  new Card(i).render();
}

// Declare event listener for the START button.
document.getElementById('game-start').addEventListener('click', function() {
  initSequence();
  document.getElementById('game-start').classList.add('hidden');
  document.getElementById('card-container').style.paddingTop = '5.6rem';
});

var cardClick = [].slice.call(document.getElementsByClassName('color-card'));
var clickCount = 0;

// Compare the clicked element to the corresponding sequence element.
function clickCompare(element) {
  clickedCards.push(parseInt(element.id));
  let cardID = document.getElementById(element.id);
  if (clickedCards[clickCount] === cardSequence[clickCount]) {
    cardID.style.backgroundColor = 'green';
    setTimeout(function() {
      cardID.style.backgroundColor = 'blue';
    }, 500);
  } else {
    let allCards = document.getElementsByClassName('color-card');
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.backgroundColor = 'red';
    }
  }
  clickCount++;
}

// Add event listeners on each Card element.
cardClick.forEach(function(element) {
  element.addEventListener('mouseenter', function() {
    element.style.cursor = 'pointer';
  });
  element.addEventListener('mouseenter', function() {
    element.style.backgroundColor = 'yellow';
  });
  element.addEventListener('mouseleave', function() {
    element.style.backgroundColor = 'blue';
  });
  element.addEventListener('click', function() {
    clickCompare(element);
  });
});
