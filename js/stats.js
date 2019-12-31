'use strict';
// retrieve user info from local storage
var users = JSON.parse(localStorage.getItem('users'));
// Declare a user profile array to fill
var allUsers = [];

// Declare constructor for user instances
function User(userName, loggedIn, allScores) {
  this.userName = userName;
  this.loggedIn = loggedIn;
  this.allScores = allScores;
  this.highScore = Math.max(...this.allScores);
  allUsers.push(this);
}
// function that returns array containing property of objects for current user
function currentUserArray(property) {
  var answer = [];
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].loggedIn === true) {
      answer[i] = allUsers[i][property];
      return answer;
    }
  }
}

// function that returns array containing property of objects. taken from class demo code.
function userArray(property) {
  var answer = [];
  for (var i = 0; i < allUsers.length; i++) {
    answer[i] = allUsers[i][property];
  }
  return answer;
}
// arrange objects in allusers from highest to lowest highscore
// obtained from https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
function leaderBoard() {
  allUsers.sort(function(a , b) {
    return b.highScore - a.highScore;
  });
}
// Create user instances
// for (var i = 0; i < users.length; i ++) {
//   new User(users[i].userName, users[i].loggedIn, users[i].highScore, users[i].allScores);
// }

new User('Andrew', true, [5,6,4,7,8,6,10]);
new User('robert', false, [3,8,3,6,9,5,34]);
new User('eugene', false, [7,0,7,4,2,6,7]);
new User('someone', false, [7,0,1,2,35,32,5]);
// sort after objects are instantiated
leaderBoard();

// finds which user is current user and displays name and high score
for (var i = 0; i < allUsers.length; i ++) {
  if (allUsers[i].loggedIn === true) {
    var userNameEl = document.getElementsByClassName('user-name');
    userNameEl[0].textContent = allUsers[i].userName;
    var userScoreEl = document.getElementsByClassName('score');
    userScoreEl[0].textContent = allUsers[i].highScore;
  }
}

// Assigns a variable to the table
var tableHolder = document.getElementsByTagName('tbody')[0];
// renders first row on table
function firstRow() {
  var userRow = document.createElement('tr');
  var userData = document.createElement('td');
  userData.textContent = 'Rank';
  userRow.appendChild(userData);
  userData = document.createElement('td');
  userData.textContent = 'User';
  userRow.appendChild(userData);
  userData = document.createElement('td');
  userData.textContent = 'Score';
  userRow.appendChild(userData);
  tableHolder.appendChild(userRow);
} 
// Creates a method that renders the table
var place = 1;
User.prototype.render = function() {
  var userRow = document.createElement('tr');
  var userData = document.createElement('td');
  userData.textContent = `${place}`;
  userRow.appendChild(userData);
  place++;
  userData = document.createElement('td');
  userData.textContent = `${this.userName}`;
  userRow.appendChild(userData);
  userData = document.createElement('td');
  userData.textContent = `${this.highScore}`;
  userRow.appendChild(userData);
  tableHolder.appendChild(userRow);
}
// renders first row
firstRow();
// loop through 10 users and display them in leaderboard
for (i = 0; i < allUsers.length; i++) {
  allUsers[i].render();
}
// creates chart to display results
var ctx = document.getElementById('resultsChart');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: []
    datasets: [{
      label: 'Score',
      data: allUsers[0].allScores,
    }]
  }
});
