/**************************************************/
/* Link this JS file before all other JS files!!! */
/**************************************************/
'use strict';

// Declare array to store all User instances.
var allUsers = [];

// Declare constructor for User instances..
function User(userName, loggedIn = false) {
  this.userName = userName;
  this.loggedIn = loggedIn;
  this.highScore = 0;
  this.allScores = [];
  allUsers.push(this);
}

// Declare function to log in User.
function logInUser(loginForm) {
  var userNameValue = document.getElementById('user-name').value;

  if (userNameValue === '') {
    alert('Please enter a Username!');
  } else {
    if (allUsers.length === 0) {
      new User(userNameValue, true);
      console.log('logged in first time');
    } else {
      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].userName === userNameValue) {
          allUsers[i].loggedIn = true;
          console.log('logged in existing');
          break;
        } else {
          new User(userNameValue, true);
          console.log('logged in new');
          break;
        }
      }
    }

    loginForm.reset();
    localStorage.setItem('users', JSON.stringify(allUsers));
    displayUser();
  }
}

// Declare function to display logged in User.
function displayUser() {
  var loggedInUser = '';
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].loggedIn === true) {
      loggedInUser = allUsers[i].userName;
      document.getElementById('logged-in-user').textContent = loggedInUser;
      break;
    }
  }

  document.getElementById('login-form').classList.toggle('hidden');
  document.getElementById('logout-form').classList.toggle('hidden');
}

// Declare function to log out User.
function logOutUser() {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].loggedIn === true) {
      allUsers[i].loggedIn = false;
      break;
    }
  }
  localStorage.setItem('users', JSON.stringify(allUsers));
  document.getElementById('login-form').classList.toggle('hidden');
  document.getElementById('logout-form').classList.toggle('hidden');
}

function loadPage() {
  var loginForm = document.getElementById('login-form');
  var logoutButton = document.getElementById('logout-btn');

  if (localStorage.getItem('users') !== null) {
    var parsedUsers = JSON.parse(localStorage.getItem('users'));

    for (let i = 0; i < parsedUsers.length; i++) {
      allUsers.push(parsedUsers[i]);
    }
    displayUser();
  }

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    logInUser(loginForm);
  });

  logoutButton.addEventListener('click', logOutUser);
}

loadPage();
