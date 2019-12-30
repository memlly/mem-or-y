'use strict';

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
document.getElementById('game-btn').addEventListener('click', toggleGame);
