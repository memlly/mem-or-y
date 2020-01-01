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
      answer = allUsers[i][property];
      return answer;
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
// for (var i = 0; i < users.length; i ++) {
//   new User(users[i].userName, users[i].loggedIn, users[i].highScore, users[i].allScores);
// }
// Dummy user profiles for now
new User('Andrew', true, [5,6,4,4,5]);
new User('robert', false, [3,8,3,6,9 ,5 ,34 ,5,6,7,8]);
new User('eugene', false, [7,0,7,4,2 ,6 ,7]);
new User('someone', false,[7,0,1,2,35,32,5]);
new User('joe', false, [3,8,3,6,9 ,5 ,34 ,5,6,7,8]);
new User('john', false, [7,0,7,4,2 ,6 ,7]);
new User('someoneelse', false,[7,0,1,2,35,32,5]);
new User('harlen', false, [3,8,3,6,9 ,5 ,34 ,5,6,7,8]);
new User('nelrah', false, [7,0,7,4,2 ,6 ,7]);
new User('soddsfkjf', false,[7,0,1,2,35,32,5]);
new User('angela', false, [3,8,3,6,9 ,5 ,34 ,5,6,7,8]);
new User('olga', false, [7,0,7,4,2 ,6 ,7]);
new User('noway', false,[7,0,1,2,35,32,5]);
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
  if (i < 10) {
    allUsers[i].render();
  }
}


// creates a label array that is at least 10 numbers long max of length of user scores array
var dataLabel = [];
if (currentUser('allScores').length <= 10) {
  for (i = 1; i <= 10; i++) {
    dataLabel.push(i);
  }
} else {
  for (i = 1; i <= currentUser('allScores').length; i ++) {
    dataLabel.push(i);
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
// creates chart to display results
var ctx = document.getElementById('resultsChart');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dataLabel,
    datasets: [{
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
      borderColor: 'yellow'
    },{
      type: 'line',
      label: 'Average Score',
      data: avgArray,
      pointRadius: 0,
      fill: false,
      borderColor: 'rgb(78, 183, 248)'
    }],
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
