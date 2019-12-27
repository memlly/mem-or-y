# Vision
To create a fun, simple, and user-interactive memory game that progressive in difficulty with each successful attempt. This game will be a fun way to make the time go by and increase your neuroplasticity. This benefit will be proven by tracking the performance of each user and displaying it in a chart.
#Scope (In/Out)
## In
- The web app will take in a username to track results and high scores.
- The initial main contents of the home page will display screenshots of the game being played and the rules and a summary of the game.
- The web app will display 3 colored boxes that will light up with a sequence that the user will need to remember.
- A failure will bring the user to the results page which will show their score among the high scores for the game and also a chart that displays performance over sessions for users.
- The web app will have an about us page that will display pictures of all contributers with hover and click states that will display additional info about each person.
## Out
- This product will not be designed to work on mobile devices.
# MVP
- At minimum our main page will have a header with the project name and a navigation bar for each page. There will be a short summary of the rules for the game. There will be an input box to take in a user name which will replace the main page contents with 4 colored boxes that will light up in a sequence that aggragates with each successive round. When an attempt is unsuccessful the user will be brought to the results page which will display the username and the score as well as their place relative to the top 10 leaderboard. We will have an about us page with an image for each contributer that zooms in on hover and flips over to a personal bio on a click. Below the images will show listed benefits of playing memory games. 
# Stretch
- For our stretch goals we will allow the user to select a difficulty setting that will determine how many colored boxes will be displayed. We will use the difficulty setting as a bonus multiplier for the points to be displayed in the results page. We will also attempt to make a chart that tracks each users score over each session to track progress. 
# Data Flow
1. The main page will prompt the user for a username in a text box in the middle of the page.
2. The username will be stored in local storage and will cause the main contents of the page to be replaced with the 4 colored boxes to start the game.
3. There will be a start button that the user will need to press to begin the game.
4. One of the colored boxes will light up and then fade back and will wait for the user to click on it.
5. If the correct box is clicked then that same box and then another random box(which could be the same box). This sequence increases with each successful guess.
6. Once the user fails they will be navigate to the results page which shows their score next to their user name and also their psoition relative to the top 10 leader board.
7. The user can play again by pressing on the logo or the home button.
8. The user is prompted as to whether they want to play as current username or a different one and this repeats all the above steps.
9. The user can click on the about us page link.
10. The displayed images will have a hover state and a click state that zooms and shows personal info respectively.
11. The footer link can be clicked which is a link to the github page.
