'use strict';

// Grab login button by ID.
var loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('game-info').classList.toggle('hidden');
  document.getElementById('game-display').classList.toggle('hidden');
});
