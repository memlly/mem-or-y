'use strict';
// retrieve user info from local storage
var users = JSON.parse(localStorage.getItem('users'));
// Declare a user profile array to fill
var allUsers = [];

// Declare constructor for user instances
function User(userName, loggedIn, highScore, allScores) {
  this.userName = userName;
  this.loggedIn = loggedIn;
  this.allScores = allScores;
  this.highScore = Math.max(...this.allScores);
  allUsers.push(this);
}
// Create user instances
// for (var i = 0; i < users.length; i ++) {
//   new User(users[i].userName, users[i].loggedIn, users[i].highScore, users[i].allScores);
// }

new User('Andrew', false, 0, [5,6,4,7,8,6,10]);
new User('robert', false, 0, [3,8,3,6,9,5,34]);
new User('eugene', false, 0, [7,34,7,4,2,6,7]);
new User('someone', false, 0, [7,0,1,2,35,32,5]);

