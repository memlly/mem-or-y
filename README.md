# (mem || y)

Code Fellows 201 - Final Group Project

## Group Members

The group members for this project consisted of:

- [Robert James Nielsen](https://github.com/robertjnielsen)
- [Eugene Monnier](https://github.com/eugenemonnier)
- [Andrew Kyllo](https://github.com/kyllo34)

## What Is (mem || y) ??

(mem || y) {memory} is a Simon-esque game where the user is presented with a sequence of colors that are displayed. They must then attempt to repeat the sequence correctly.

If successful, the sequence repeats, and continuously builds upon itself at random. This increases the length of the sequence, and the more the user must correctly remember in order to continue to advance in the game.

Once a user has failed to correctly repeat the sequence, they will be taken to a page that displays their results, as well as the "High Scores" of all users who have attempted the game before them.

## User Stories

### **Website Header**
As a user, I want to be able to know what website I am on and navigate to the different parts of the website.

**Feature Tasks**

* Create initial html pages with HTML boilerplate. (Main, High-Scores, About-Us)

* Create page header (separate HTML & CSS files for each page) to be used on all pages. This will include:

	* Company Logo & Game Title

	* Navigation links for each page

**Acceptance Tests**

* Able to load each page individually by opening the page in Chrome through terminal.

* Header for each page looks like our defined wireframe.

* Links for each page work in loading other pages in same tab.
  

### **Website Footer**
As a user, I would want to know when the page was created and check out the websites GitHub Repo.

**Feature Tasks**

* Create footer for each page of the website.

* Footer will have text describing the year the project was built.

* Footer will contain a link to the website’s GitHub repo.

	* When clicked, the link will open a new tab in the browser.

**Acceptance Tests**

* The footer text is visible at the bottom of the page.

* When the link in the footer is clicked it will load the GitHub’s Repo in a separate tab.

### **Initial Main Page Body**
As a user, when I pull up the main page on my browser, I would want to have a visually appealing page layout. This layout will be defined as how the page initially loads for a new user.

**Feature Tasks**

* Create initial wireframe for main page

	* Basic HTML & CSS

* Include a text box input for the user to enter their username

* Include a label for the input “User”

* Include a submit button “Login”

**Acceptance Tests**

* When page loads, the body of the page has the initial wireframe layout of that page.

* The user is able to enter text into the input text box.

* The input text box has a label of “User”.

* There is a clickable button that does nothing and has the text of “Login”.

### **Initial High-Score Page Body**
As a user, when I click on the “High Scores” link, I would want to see a page that has a visually appealing page layout.

**Feature Tasks**

* Create initial wireframe for high-scores page.

	* Basic HTML & CSS

* At this point, the page will load in a state where no user has logged in.

**Acceptance Tests**

* When the page loads, the body of the page has the initial wireframe layout of the page.

### **Basic About-Us Page Body**
As a user, when I click on the “About Us” link, I would want to see a page that has a visually appealing page layout.

**Feature Tasks**

* Create initial wireframe for about-us page.

	* Basic HTML & CSS

**Acceptance Tests**

* When the page loads, the body of the page has the initial wireframe layout of the page.

## Wireframes & Mockups

Index / Game Page
![Main / Game Page](./mockups/index-wireframe.jpg)

Results / Score Page
![Results / Score Page](./mockups/score-wireframe.jpg)

About Us Page
![About Page](./mockups/about-wireframe.jpg)

Domain Modeling
![Domain Model](./mockups/domain-model.jpg)
