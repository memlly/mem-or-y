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
function currentUser(property) {
  var answer = '';
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].loggedIn === true) {
      if (allUsers[i].allScores[0] !== undefined) {
        answer = allUsers[i][property];
        return answer;
      }
    }
  }
}
// arrange objects in allusers from highest to lowest highscore
// obtained from https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
function leaderBoard() {
  allUsers.sort(function(a , b) {
    return b.highScore - a.highScore;
  });
}
// Create user instances
for (var i = 0; i < users.length; i++) {
  new User(users[i].userName, users[i].loggedIn, users[i].allScores);
}
leaderBoard();
// finds which user is current user and displays name and high score
for (i = 0; i < allUsers.length; i ++) {
  var userNameEl = document.getElementsByClassName('user-name');
  var userScoreEl = document.getElementsByClassName('score');
  if (allUsers[i].loggedIn === true) {
    userNameEl[0].textContent = allUsers[i].userName;
    if (allUsers[i].highScore > 0) {
      userScoreEl[0].textContent = allUsers[i].highScore;
    } else {
      userScoreEl[0].textContent = 'None';
    }
    break;
  } else {
    userNameEl[0].textContent = 'None';
    userScoreEl[0].textContent = 'None';
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
// vairable that shows rank on leaderboard
var place = 1;
// Creates a method that renders the table
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
};
// renders first row
firstRow();
// loop through 10 users and display them in leaderboard
for (i = 0; i < allUsers.length; i++) {
  if (allUsers[i].highScore > 0) {
    if (i < 10) {
      allUsers[i].render();
    }
  }
}
// creates a label array that is at least 10 numbers long, max is length of user scores array
var dataLabel = [];
if (currentUser('allScores') === undefined) {
  for (i = 1; i <= 10; i++) {
    dataLabel.push(i);
  }
} else {
  for (i = 1; i <= currentUser('allScores').length; i++) {
    dataLabel.push(i);
  }
}

// create variable that contains scatter plot objects
var allpoints = [];
// declare constructor for scatter plot objects
function Point(x,y) {
  this.x = x;
  this.y = y;
  allpoints.push(this);
}
// creates an array of average score per session
// creates new instances of scatter points
var avgArray = [];
for (i = 0; i < dataLabel.length; i++) {
  var counter = 0;
  for (var j = 0; j < allUsers.length; j++) {
    if (allUsers[j].allScores[i]) {
      new Point(dataLabel[i], allUsers[j].allScores[i]);
      if (!avgArray[i]) {
        avgArray[i] = allUsers[j].allScores[i];
      } else {
        avgArray[i] += allUsers[j].allScores[i];
      }
      counter++;
    }
  }
  avgArray[i] /= counter;
}
// creates dataset for chart
var dataSets = [{
  type: 'scatter',
  data: allpoints,
  label: 'All Scores',
  backgroundColor: 'rgb(78, 183, 248)',
  borderColor: 'yellow',
  pointRadius: 2
},{
  label: currentUser('userName'),
  data: currentUser('allScores'),
  fill: false,
  pointRadius: 0,
  borderColor: 'yellow',
},{
  type: 'line',
  label: 'Average Score',
  data: avgArray,
  pointRadius: 0,
  fill: false,
  borderColor: 'rgb(78, 183, 248)'
}];
// removes current user dataset if current user has no score history
if (currentUser('allScores') === undefined) {
  dataSets.splice(1,1);
}
// creates chart to display results
var ctx = document.getElementById('resultsChart');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dataLabel,
    datasets: dataSets
  },
  options: {
    title: {
      display: true,
      fontColor: 'black',
      text: 'Progress Over Sessions'
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'black'
        },
        gridLines: {
          zeroLineColor: 'black'
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'black'
        },
        gridLines: {
          zeroLineColor: 'black'
        }
      }]
    },
    legend: {
      labels: {
        fontColor: 'black'
      }
    }
}
});

/****************************************************/
/* Functions to create test users & populate scores */
/****************************************************/
function randomScores() {
  var minMaxOffset = 0;
  var testScoreArray = [];
  for (var i = 0; i < 10; i++) {
    testScoreArray[i] = Math.round(Math.random() * ((8 + minMaxOffset) - (0 + minMaxOffset)) + (0 + minMaxOffset));
    minMaxOffset += 2;
  }
  return testScoreArray;
}

function testUsers() {
  new User('Michelle', false, randomScores());
  new User('Lillian', false, randomScores());
  new User('Gina', false, randomScores());
  new User('Harlen', false, randomScores());
  new User('Blandine', false, randomScores());
  new User('Patrick', false, randomScores());
  new User('Ken', false, randomScores());
  new User('Eyob', false, randomScores());
  new User('Matthew', false, randomScores());
  localStorage.setItem('users', JSON.stringify(allUsers));
}
