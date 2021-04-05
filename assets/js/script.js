/*------------------------- GLOBAL VARIABLES -------------------------*/

let gridSize; //either 3 or 4, used to generate the grid and also the pattern arrays length.
let colourPalette; //either 4, 5 or 6, used to limit the number range in the pattern arrays generated and the colour palette.
let viewTimerSelected; //either 0, 5, 10 or 15, used to determine the number of seconds the player can view the pattern for.
let userColourSelected; //assigned a colour from the palette and used to pass this value to the addColour function.
let difficultySelected; //assigned 1, 2, 3 or 4 to represent the difficulty selected.
let computerPattern; //array of random numbers for the creation the initial pattern for player to observe.
let userPattern; //array of numbers generated from the user added colours in the grid.
let gameRound; //each game is 5 rounds, this variable tracks the round number between functions.
let colourPickSound; //the sound played when a colour is selected from the palette.
let colourAddSound; //the sound played when a colour is added to the grid.
let winSound; //the sound played when a player successfully matches a pattern.
let looseSound; //the sound played when a player is unsuccessful in matching a pattern.
let milliseconds; //the millisecond count of the player timer that records the players time to complete a pattern.
let seconds; //the second count of the player timer that records the players time to complete a pattern.
let minutes; //the minute count of the player timer that records the players time to complete a pattern.
let timer; //the timer variable for the player timer.
let totalMatched; //records the how many patterns have been matched as the game progresses through the five rounds.
let gameScore; //the totalscore recorded and updated as the game progresses through the five rounds to give a total at the end.
let gameColumn = document.querySelector("#game-column");
let rowZero = document.querySelector('#position-zero');
let rowOne = document.querySelector('#position-one');
let rowTwo = document.querySelector('#position-two');
let rowThree = document.querySelector('#position-three');
let rowFour = document.querySelector('#position-four');

/*------------------------- MENU FUNCTIONS -------------------------*/

//runs mainMenu function with correct parameter for start of the game.
document.addEventListener("DOMContentLoaded", function () {
  mainMenu(false);
});

/*
sets up the five rows to contain options presented for selection within the menu screen and presents initial options.
*/
function mainMenu(gameStarted) {
  //removes all innerHTML elements so that at any point the main menu is selected then all previous content in the rows is removed.
  //'gameStarted' is true or false depending on whether a game has been started or not when the mainMenu function is called.
  document.getElementById('position-zero').innerHTML = "";
  document.getElementById('position-one').innerHTML = "";
  document.getElementById('position-two').innerHTML = "";
  document.getElementById('position-three').innerHTML = "";
  document.getElementById('position-four').innerHTML = "";

  if (gameStarted) { //removes the scoreColumn if the main menu is being called from within the game where the scorecolumn is present.
    let scoreColumn = document.getElementById("score-column");
    scoreColumn.remove();
    stopPlayerTimer()
  }

  //selects game-column and sets the classes needed for the menu.
  gameColumn.setAttribute('class', 'col-12 order-2 d-flex align-items-center flex-column');

  //selects the five rows and sets the classes needed for the menu.
  rowZero.setAttribute('class', 'row position-zero-menu');
  rowOne.setAttribute('class', 'row position-one-menu');
  rowTwo.setAttribute('class', 'row position-two-menu');
  rowThree.setAttribute('class', 'row position-three-menu');
  rowFour.setAttribute('class', 'row position-four-menu');

  let contactButton = `
    <button class="btn btn-yellow" id="contact-button">
      <a href="contact.html"><i class="fas fa-envelope-square"></i></a>
    </button>`;

  let gameTitle = `
    <div id="title">
      <h1>
      <span class="h1-red">P</span><span class="h1-green">a</span><span class="h1-blue">t</span><span class="h1-yellow">t</span><span class="h1-red">e</span><span class="h1-green">r</span><span class="h1-blue">n </span><span class="h1-yellow">S</span><span class="h1-red">p</span><span class="h1-green">i</span><span class="h1-blue">e</span><span class="h1-yellow">l</span><span class="h1-red">!</span>
      </h1>
    </div>
  `;

  let mainMenuButtons = `
  <button class="btn btn-red" onclick="selectDifficulty()">Start</button>
  <a role="button" class="btn btn-green" href="instructions.html">How to Play</a>
  <a role="button" class="btn btn-blue" href="highscores.html">High Scores</a>
  `;

  rowZero.innerHTML = contactButton; //sets the contact button to be shown in the top right.
  rowOne.innerHTML = gameTitle; //sets the gameTitle into position-one row.
  rowThree.innerHTML = mainMenuButtons; //sets the menu buttons to be initially shown.
}

/*
defines a set of buttons for the player to select pre-set difficulties or a custom game.  Player can also select to go back one level up.
*/
function selectDifficulty() {
  let selectDifficultyText = `
  <h2 class="menu-text">Select Difficulty</h2>
  `;

  //each button has an "onclick" attribute that calls the required function with an associated parameter where required.
  let difficultySelectionButtons = `
  <button class="btn btn-blue" onclick="setDifficultyVariables(1)">Easy</button>
  <button class="btn btn-yellow" onclick="setDifficultyVariables(2)">Medium</button>
  <button class="btn btn-red" onclick="setDifficultyVariables(3)">Hard</button>
  <button class="btn btn-green" onclick="setDifficultyVariables(4)">Very Hard</button>
  <button class="btn btn-yellow" onclick="gridSizeSelection()">Custom game</button>
  <button class="btn btn-red" onclick="mainMenu(false)">return</button>
  `;

  rowTwo.innerHTML = selectDifficultyText; //sets the menu guide text to position-two row.
  rowThree.innerHTML = difficultySelectionButtons; //sets the buttons to position-three row.
}

/*
sets the variables required for the pre-set difficulties.
*/
function setDifficultyVariables(difficulty) {
  difficultySelected = difficulty;
  switch (difficulty) {
    case 1:
      gridSize = 3;
      colourPalette = 4;
      viewTimerSelected = 15;
      break;
    case 2:
      gridSize = 3;
      colourPalette = 4;
      viewTimerSelected = 10;
      break;
    case 3:
      gridSize = 3;
      colourPalette = 4;
      viewTimerSelected = 5;
      break;
    case 4:
      gridSize = 3;
      colourPalette = 5;
      viewTimerSelected = 10;
      break;
  }
  playGame(viewTimerSelected, true); //playGame expects two parameters, the 'true' informs that the user has selected pre-set difficulties.
}

/*
defines the first set of custom difficulty buttons to select the grid size.  Player can also select to go back one level up.
*/
function gridSizeSelection() {
  difficultySelected = 0; //assigns a value of 0 for conditional requests later on in regards to display of messages and saving of scores.
  let selectOptionsText = `
      <h2 class="menu-text">Select grid size</h2>
    `;

  //each button has an "onclick" attribute that calls the next function with an associated parameter where required.
  let optionButtons = `
    <button class="btn btn-green" onclick="colourNumberSelection(3)">3 x 3 grid</button>
    <button class="btn btn-blue" onclick="colourNumberSelection(4)">4 x 4 grid</button>
    <button class="btn btn-yellow" onclick="selectDifficulty()">return</button>
    `;

  rowTwo.innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
  rowThree.innerHTML = optionButtons; //sets the buttons to position-three row.
}

/*
defines the second set of custom difficulty buttons to select the grid size.  Player can also select to go back one level up.
*/
function colourNumberSelection(gridSelection) {
  gridSize = gridSelection; //the parameter passed to the function is the grid selection size; value assigned to global variable 'gridsize'.
  let selectOptionsText = `
      <h2 class="menu-text">Select number of colours</h2>
    `;

  //each button has an "onclick" attribute that calls the next function with an associated parameter where required.
  let optionButtons = `
    <button class="btn btn-red" onclick="viewTimerSelection(4)">Up to 4 colours</button>
    <button class="btn btn-green" onclick="viewTimerSelection(5)">Up to 5 colours</button>
    <button class="btn btn-blue" onclick="viewTimerSelection(6)">Up to 6 colours</button>
    <button class="btn btn-yellow" onclick="gridSizeSelection()">return</button>
    `;

  rowTwo.innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
  rowThree.innerHTML = optionButtons; //sets the buttons to position-three row.
}

/*
defines the final set of custom difficulty buttons to select how long the pattern can be viewed.  Player can also select to go back one level up.
*/
function viewTimerSelection(colourSelection) {
  colourPalette = colourSelection; //the parameter passed to the function is the colour number selection size; value then assigned to global variable 'colourPalette'.
  let selectOptionsText = `
      <h2 class="menu-text">Select view timer</h2>
    `;

  //each button has an "onclick" attribute that calls the next function with an associated parameter where required.
  let optionButtons = `
    <button class="btn btn-red" onclick="playGame(0, false)">No Timer</button>
    <button class="btn btn-green" onclick="playGame(5, false)">5 Seconds</button>
    <button class="btn btn-blue" onclick="playGame(10, false)">10 seconds</button>
    <button class="btn btn-yellow" onclick="playGame(15, false)">15 seconds</button>
    <button class="btn btn-red" onclick="colourNumberSelection(gridSize)">return</button>
    `;

  rowTwo.innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
  rowThree.innerHTML = optionButtons; //sets the buttons to position-three row.
}

/*
Defines the last set of buttons that launch the game with the chosen options, allows user to go up level or go to the main menu.
*/
function playGame(viewTimerSelection, gameChoice) {
  viewTimerSelected = viewTimerSelection;

  gameRound = 1;
  totalMatched = 0; //sets total score to 0 upon a new game.
  gameScore = 0; //resets the score.

  let selectOptionsText = `
      <h2 class="menu-text">Ready?</h2>
    `;

  if (gameChoice) {
    //sets buttons if the player arrived here from the pre-set difficulty options.  Needed so that the return button directs correctly.
    //Play Game button calls the next function that generates the game area.
    let optionButtons = `
      <button class="btn btn-green" onclick="generateGameArea(true)">Play Game!</button>
      <button class="btn btn-blue" onclick="selectDifficulty()">return</button>
      <button class="btn btn-yellow" onclick="mainMenu(false)">Main menu</button>
      `;
    rowTwo.innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
    rowThree.innerHTML = optionButtons; //sets the buttons to position-three row.
  } else {
    //sets buttons if the player arrived here from the customs difficulty options.  Needed so that the return button directs correctly.
    //Play Game button calls the next function that generates the game area.
    let optionButtons = `
      <button class="btn btn-green" onclick="generateGameArea(true)">Play Game!</button>
      <button class="btn btn-blue" onclick="viewTimerSelection(colourPalette)">return</button>
      <button class="btn btn-yellow" onclick="mainMenu(false)">Main menu</button>
      `;
    rowTwo.innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
    rowThree.innerHTML = optionButtons; //sets the buttons to position-three row.
  }
}

/*------------------------- GAME FUNCTIONS -------------------------*/

/*
The function called that generates the required grid using the 'gridSize' variable.
The requirement parameter expects a true or false value.
- True will generate a grid with the associated attributes needed for the computer to display the pattern to be memorised.
- False will generate a grid with the associated attributes needed for the player grid to be filled in with colours to match the pattern.
- had some trouble with the below function posted on stackoverflow to get an answer: https://stackoverflow.com/questions/66833813/building-html-using-loops-in-js.
*/
function generateGrid(requirement) {
  let gridId = 0
  let grid = `
    <div class="grid">
    `;
  if (requirement) {
    for (let i = 0; i < gridSize; i++) {
      let gridRow = `
        <div class="square-row d-flex flex-row">
        `;
      for (let s = 0; s < gridSize; s++) {
        gridId += 1
        let square = `
            <div class="squares${gridSize}" id="${(gridId - 1)}"></div>
            `;
        gridRow += square;
      }
      gridRow += `
        </div>
      `;
      grid += gridRow;
    }
  } else {
    for (let i = 0; i < gridSize; i++) {
      let gridRow = `
        <div class="square-row d-flex flex-row">
        `;
      for (let s = 0; s < gridSize; s++) {
        gridId += 1
        let square = `
            <div class="squares${gridSize}" id="square${(gridId - 1)}" onclick="addColour(${(gridId - 1)})"></div>
            `;
        gridRow += square;
      }
      gridRow += `
        </div>
      `;
      grid += gridRow
    }
  }
  grid += `
        </div>
    `;

  return grid;
}

/*
sets up the five rows to contain the elements of the game display, the score column and the responsive elements of the score display.
The 'newGame' parameter expects a true or false value and is needed for the five rounds of one game to take place.
- For a new game the value is 'true' and the 'game column' and 'score-column is set up for the first time.
- Between rounds the value is false so the score column is maintained and the between round message needs to be removed.
*/
function generateGameArea(newGame) {
  if (newGame) { //the following happens if newGame = true; therefore the start of a new game.
    document.getElementById('position-one').innerHTML = "";
    document.getElementById('position-two').innerHTML = "";
    document.getElementById('position-three').innerHTML = "";
    document.getElementById("score-modal").innerHTML = ""; //removes scores from mobile score button.

    //creates the score column and appends to the game-score-row. Uses bootstrap classes so that this will only show on displays ≥992px.
    let scoreColumn = document.createElement("div");
    scoreColumn.setAttribute('id', 'score-column');
    scoreColumn.setAttribute('class', 'col-2 order-1 d-none d-lg-block d-flex align-items-center flex-column');
    let mainRow = document.getElementById("game-score-row");
    mainRow.appendChild(scoreColumn);

    //sets the game-column classes needed for the game screen (main change is from col-12 to col-10 to accomodate the score-column).
    gameColumn.setAttribute('class', 'col-10 order-2 d-flex align-items-center flex-column');

    //sets the classes for the five rows needed for the game screen.
    rowZero.setAttribute('class', 'row position-zero-game');
    rowOne.setAttribute('class', 'row position-one-game');
    rowTwo.setAttribute('class', 'row position-two-game');
    rowThree.setAttribute('class', 'row position-three-game');
    rowFour.setAttribute('class', 'row position-four-game');

    //the main menu button and title of the score column for displays ≥992px.
    let scoreColumnTitle = `
    <div id="score-column-header">
      <button class="btn btn-green" onclick="mainMenu(true)" id="scoreColumnMenuButton">Main menu</button>
      <h1>Score</h1>
    </div>
    `;
    document.getElementById('score-column').innerHTML = scoreColumnTitle;

    //the main menu and score buttons for displays <992px.
    let mobileButtons = `
    <div id="mobile-buttons" class="d-flex flex-row d-lg-none">
      <button class="btn btn-green" onclick="mainMenu(true)" id="mobileViewMenuButton">Main menu</button>
      <button type="button" class="btn btn-red" data-bs-toggle="modal" data-bs-target="#exampleModal">Score</button>
    </div>
    `;
    rowZero.innerHTML = mobileButtons; //mobile buttons are displays top and center of the game screen.

  } else { //the following happens if newGame = false; therefore between rounds of a game.
    rowOne.innerHTML = ""; //removes the HTML generated by functions patternCompareComputer and patternComparePlayer between rounds.
    rowThree.innerHTML = ""; //remove the end of round message between rounds.
    rowOne.setAttribute('class', 'row position-one-game'); //sets the classes needed for the game screen.
    rowThree.setAttribute('class', 'row position-three-game'); //sets the classes needed for the game screen.
    rowFour.setAttribute('class', 'row position-four-game'); //sets the classes needed for the game screen.
  }

  let grid = generateGrid(true); //calls the generateGrid function to display a grid for the computer to display the pattern.
  rowTwo.innerHTML = grid;

  createPatternArray();
  setViewTimer();
}

/*
Converts the array passed as parameter to colours on the grid.
- The array.length and amount of grid squares will be the same.
- each iteration of the loop moves through each subsequent value of the array and the grid squares to determine the colour assigned.
*/
function convertArrayToPattern(array) {
  for (let i in array) {
    let setColor = document.getElementById(i); //the grid squares are the only elements with the ids: 1,2,3,4... etc.
    if (array[i] === 0) {
      setColor.style.backgroundColor = "red";
    } else if (array[i] === 1) {
      setColor.style.backgroundColor = "green";
    } else if (array[i] === 2) {
      setColor.style.backgroundColor = "blue";
    } else if (array[i] === 3) {
      setColor.style.backgroundColor = "yellow";
    } else if (array[i] === 4) {
      setColor.style.backgroundColor = "purple";
    } else {
      setColor.style.backgroundColor = "orange";
    }
  }
}

/*
Creates an array with random numbers.  Uses variables gridSize and colourPalette so that array length and number value range is that required.
*/
function createPatternArray() {
  var newPatternArray = [];
  for (let i = 0; i < (gridSize * gridSize); i++) {
    let number = Math.floor(Math.random() * colourPalette);
    newPatternArray.push(number);
  }
  computerPattern = newPatternArray; //assigns new array to the global variable computerPattern.

  convertArrayToPattern(computerPattern); //passes the new array to convertArrayToPattern() to have the pattern shown as colours on the grid.
}

/*
determines whether a button should be shown (if no timer has been selected) or whether a timer should be shown.
*/
function setViewTimer() {
  if (viewTimerSelected === 0) { //sets a button if no timer selected.
    let goButton = `
      <button class="btn btn-yellow" id="go-button" onclick="generatePlayerGrid()">Go!</button>
      `;
    document.getElementById('position-one').innerHTML = goButton;
  } else { //calls the viewTimer function if 5, 10 or 15 seconds selected.
    viewTimer();
  }
}

/*
displays and counts down to zero from the view time selected (either 5, 10 or 15 seconds).
- learnt and adapted from pt code" (https://www.youtube.com/watch?v=vSV_Ml2_A88&t=19s).
*/
function viewTimer() {
  let currentTimer = document.createElement("h2");
  currentTimer.setAttribute('id', 'view-timer');
  rowOne.appendChild(currentTimer); //timer displays in position-one.

  let timeLeft = viewTimerSelected;
  let patternDisplayTimer = setInterval(function () {
    if (timeLeft <= 0) { //stops timer when value reaches 0 and triggers the creation of the player grid.
      clearInterval(patternDisplayTimer);
      generatePlayerGrid();
    }
    currentTimer.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000); //1 second interval.

  let scoreColumnMenuBtn = document.getElementById("scoreColumnMenuButton");
  let mobileViewMenuBtn = document.getElementById("mobileViewMenuButton");

  //stops the timer if the main menu button in the score column is selected during the countdown.
  scoreColumnMenuBtn.addEventListener('click', function () {
    clearInterval(patternDisplayTimer);
    console.log("timer interrupted");
  });

  //stops the timer if the main menu mobile button is selected during the countdown.
  mobileViewMenuBtn.addEventListener('click', function () {
    clearInterval(patternDisplayTimer);
    console.log("timer interrupted");
  });
}

/*
creates the player grid.
*/
function generatePlayerGrid() {
  rowOne.innerHTML = ""; //clears the computer generated pattern from the game screen.

  let grid = generateGrid(false); //calls the generateGrid function with a value of false so that the player grid is created.
  rowTwo.innerHTML = grid;

  generatePalette();
  playerTimer();
}

/*
the following three functions are concerned with timing how long the player takes to complete their pattern and submit.
- learnt and adapted from https://www.youtube.com/watch?v=oY8V6GuZrkM.
*/
function playerTimer() { //sets that timer values to 0 and sets the variable to the runPlayerTimer function.
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  timer = setInterval(runPlayerTimer, 10); //10 so that the function is called 100 times a second.
}

function runPlayerTimer() { //increases the variables as per the set interval.
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
}

function stopPlayerTimer() { //stops the timer; this function is called by the checkCompletion() function.
  clearInterval(timer);
}

/*
creates the palette on the game screen for the user to select colours to add to the grid.
- colourPalette value will dictate how many values of the colourArray will be used.
*/
function generatePalette() {
  let colourArray = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  let palette = `
        <div class="d-flex justify-content-center flex-wrap" id="palette-area">
    `;
  for (let i = 0; i < (colourPalette); i++) {
    let insertColour = `
        <div id="palette-${colourArray[i]}")"></div>
        `;
    palette += insertColour;
  }
  palette += `
        </div>
    `;

  rowThree.innerHTML = palette;

  userColourSelected = ""; //ensures that the userColourSelected value (from pickColour function) is not maintained between rounds/games.

  generateSubmitButton();
  pickColour(); //pickColour called so that event listeners for palette are set up.
}

/*
creates a submit button at the bottom of the game area which will call checkCompletion() function when selected.
*/
function generateSubmitButton() {
  let submitButton = `
    <button class="btn btn-red" id="submit-button" onclick="checkCompletion()">Submit</button>`;
  rowFour.innerHTML = submitButton;
}

/*
deals with the events that occur when a user selects a colour from the palette.
*/
function pickColour() {
  let red = document.getElementById("palette-red");
  let green = document.getElementById("palette-green");
  let blue = document.getElementById("palette-blue");
  let yellow = document.getElementById("palette-yellow");
  let purple = document.getElementById("palette-purple");
  let orange = document.getElementById("palette-orange");

  colourPickSound = document.createElement("audio");
  colourPickSound.src = "assets/sounds/pickColour.wav"; //sets the colour pick sound.

  red.addEventListener('click', function () { //event listener set up for this colour elememnt on the palette.
    colourPickSound.pause(); //pauses sound if it is already playing.
    colourPickSound.currentTime = 0; //resets sound to 0.
    colourPickSound.play(); //plays sounds when colour element on palette clicked.
    userColourSelected = "red"; //assigns the chosen colour to the variable 'userColourSelected'.
    //the following ensures that when red is selected that user feedback is provided to show that it is the chosen colour.
    red.setAttribute('class', 'color-selected');
    green.setAttribute('class', 'color-deselected');
    blue.setAttribute('class', 'color-deselected');
    yellow.setAttribute('class', 'color-deselected');
    if ((colourPalette === 5) || (colourPalette === 6)) { //for purple; selection and deselection only occurs if the colourPalette is 5 or 6.
      purple.setAttribute('class', 'color-deselected');
      if (colourPalette === 6) {
        orange.setAttribute('class', 'color-deselected'); //for orange; selection and deselection only occurs if the colourPalette is 6.
      }
    }
  });

  green.addEventListener('click', function () {
    colourPickSound.pause();
    colourPickSound.currentTime = 0;
    colourPickSound.play();
    userColourSelected = "green";
    red.setAttribute('class', 'color-deselected');
    green.setAttribute('class', 'color-selected');
    blue.setAttribute('class', 'color-deselected');
    yellow.setAttribute('class', 'color-deselected');
    if ((colourPalette === 5) || (colourPalette === 6)) {
      purple.setAttribute('class', 'color-deselected');
      if (colourPalette === 6) {
        orange.setAttribute('class', 'color-deselected');
      }
    }
  });

  blue.addEventListener('click', function () {
    colourPickSound.pause();
    colourPickSound.currentTime = 0;
    colourPickSound.play();
    userColourSelected = "blue";
    red.setAttribute('class', 'color-deselected');
    green.setAttribute('class', 'color-deselected');
    blue.setAttribute('class', 'color-selected');
    yellow.setAttribute('class', 'color-deselected');
    if ((colourPalette) === 5 || (colourPalette === 6)) {
      purple.setAttribute('class', 'color-deselected');
      if (colourPalette === 6) {
        orange.setAttribute('class', 'color-deselected');
      }
    }
  });

  yellow.addEventListener('click', function () {
    colourPickSound.pause();
    colourPickSound.currentTime = 0;
    colourPickSound.play();
    userColourSelected = "yellow";
    red.setAttribute('class', 'color-deselected');
    green.setAttribute('class', 'color-deselected');
    blue.setAttribute('class', 'color-deselected');
    yellow.setAttribute('class', 'color-selected');
    if ((colourPalette === 5) || (colourPalette === 6)) {
      purple.setAttribute('class', 'color-deselected');
      if (colourPalette === 6) {
        orange.setAttribute('class', 'color-deselected');
      }
    }
  });

  if ((colourPalette === 5) || (colourPalette === 6)) {
    purple.addEventListener('click', function () {
      colourPickSound.pause();
      colourPickSound.currentTime = 0;
      colourPickSound.play();
      userColourSelected = "purple";
      red.setAttribute('class', 'color-deselected');
      green.setAttribute('class', 'color-deselected');
      blue.setAttribute('class', 'color-deselected');
      yellow.setAttribute('class', 'color-deselected');
      purple.setAttribute('class', 'color-selected');
      if (colourPalette === 6) {
        orange.setAttribute('class', 'color-deselected');
      }
    });
  }

  if (colourPalette === 6) {
    orange.addEventListener('click', function () {
      colourPickSound.pause();
      colourPickSound.currentTime = 0;
      colourPickSound.play();
      userColourSelected = "orange";
      red.setAttribute('class', 'color-deselected');
      green.setAttribute('class', 'color-deselected');
      blue.setAttribute('class', 'color-deselected');
      yellow.setAttribute('class', 'color-deselected');
      purple.setAttribute('class', 'color-deselected');
      orange.setAttribute('class', 'color-selected');
    });
  }
}

/*
called everytime a user clicks on a grid square; will add colour to the grid square.
*/
function addColour(identifier) {
  let selectedSquare = document.getElementById('square' + identifier);

  colourAddSound = document.createElement("audio");
  colourAddSound.src = "assets/sounds/addColour.wav"; //sets the colour add sound.

  if (userColourSelected) {
    selectedSquare.style.backgroundColor = userColourSelected; // assigns the colour selected from the palette to the grid square.
    colourAddSound.pause(); //pauses sound if it is already playing.
    colourAddSound.currentTime = 0; //resets sound to 0.
    colourAddSound.play(); //plays sounds when player clicks on a grid after selecting a colour.
  } else {
    alert("you need to select a colour"); //show alert if user has not selected a colour.
  }
}

/*------------------------- CHECKS AND RESULTS FUNCTIONS -------------------------*/

/*
checks that all squares have been coloured and if so, calls the next required functions.
*/
function checkCompletion() {
  userPatternArray(); //runs this function to get the current array so that the length can be checked.

  if (userPattern.length < (gridSize * gridSize)) {
    alert("please fill in all squares");
  } else {
    patternComparePlayer();
    gameStatus();
    stopPlayerTimer();
  }
}

/*
converts the player pattern to an array to compare with the computer generated array in the gameStatus() function.
*/
function userPatternArray() {
  var gridOfSquares = document.getElementsByClassName('squares' + gridSize);
  userPattern = []; //the array for the colour values.
  for (let i = 0; i < gridOfSquares.length; i++) { //for loop to check each square and add a value to the array depending on colour found.
    if (gridOfSquares[i].style.backgroundColor === "red") {
      userPattern.push(0);
    } else if (gridOfSquares[i].style.backgroundColor === "green") {
      userPattern.push(1);
    } else if (gridOfSquares[i].style.backgroundColor === "blue") {
      userPattern.push(2);
    } else if (gridOfSquares[i].style.backgroundColor === "yellow") {
      userPattern.push(3);
    } else if (gridOfSquares[i].style.backgroundColor === "purple") {
      userPattern.push(4);
    } else if (gridOfSquares[i].style.backgroundColor === "orange") {
      userPattern.push(5);
    }
  }
}

/*
The following two functions run at the end of a round to allow the player to switch between their pattern and the computers to compare them.
- at the end of a round creates a button that allows the player to check their pattern with the computers.
*/
function patternComparePlayer() {
  let switchButton = `
    <div class="compare-box">
        <h2>Compare results</h2>
        <button class="btn btn-yellow" id="switch-button" onclick="patternCompareComputer()">Switch</button>
    </div>
    `;
  rowOne.innerHTML = switchButton;

  let grid = generateGrid(true); //Parameter is true as the grid needed does not need to be interacted with.
  rowTwo.innerHTML = grid; //creates the grid on the game screen.

  convertArrayToPattern(userPattern); //calls the function to convert the userPattern array to a pattern on the grid.
}

//allows the player to switch from viewing the computer pattern to their own again.
function patternCompareComputer() {
  let switchButton = `
    <div class="compare-box">
        <h2>Compare results</h2>
        <button class="btn btn-yellow" id="switch-button" onclick="patternComparePlayer()">Switch</button>
    </div>
    `;
  rowOne.innerHTML = switchButton;

  let grid = generateGrid(true); //Parameter is true as the grid needed does not need to be interacted with.
  rowTwo.innerHTML = grid; //creates the grid on the game screen.

  convertArrayToPattern(computerPattern); //calls the function to convert the computerPattern array to a pattern on the grid.
}

/*
checks results, display relevant messages and options to the player and progresses the game.
*/
function gameStatus() {
  gameRound += 1; //progresses the game round by 1.

  let submitButton = document.getElementById('submit-button');
  submitButton.remove(); //removes the submit button.

  //----- determines whether the player pattern matches the computer pattern by interating through both arrays and where the values equal each other at each index, 1 is added to the score.-----//
  //if the score is the same value as the array length then it is a match, if score is less than the array value then it is not a match.
  let score = 0;
  for (let i = 0; i < computerPattern.length; i++) {
    if (userPattern[i] === computerPattern[i]) {
      score += 1;
    }
  }
  resultSound(score);
  console.log("current matchScore is " + score);

  //----- determines a win/loss messages by checking if the score is the same as the array length (9 or 16 depending on grid size chosen). -----//
  //'messageResult' is displayed in the end of round message
  //'displayResult' is displayed in the score column and score modal.
  if (score === userPattern.length) {
    messageResult = "Well done! All matched!";
    displayResult = "Win"
    totalMatched += 1;
  } else {
    messageResult = "Opps! Not quite.";
    displayResult = "Loss"
  }

  //----- determines the round score which is a function of a point value award for a correct match and the time taken to achieve this. -----//
  let secondsString = seconds.toString();
  let millisecondsString = milliseconds.toString();
  let secondsTakenString = (secondsString + '.' + millisecondsString); //combines the seconds and milliseconds variables to give a complete value.

  let minuteScore = (minutes * 30) //assigns 30 points per minute used (these will be subtracted from the round score.
  console.log("the score for minutes used is " + minuteScore);

  let secondsScoreString = (60 - secondsTakenString); //assigns a point value to the seconds taken = 60 seconds minus the time in seconds taken
  console.log("the points earned for the time taken is " + secondsScoreString);

  (score === 9) ? matchScore = 60: matchScore = 0;
  console.log("the score for getting the pattern right/wrong is " + matchScore);

  (matchScore === 60) ? roundScore = ((matchScore + secondsScoreString) - minuteScore): roundScore = 0;
  console.log("the score for this round is " + roundScore);

  gameScore += roundScore; //the game score (5 rounds) is all of the round scores added together.
  console.log("the current game score is " + gameScore);

  //----- Adds 'displayResult' and time taken in the round to the score column. -----//
  let displayResultsColumn = document.getElementById("score-column");
  let displayResultsModal = document.getElementById("score-modal");

  let columnRoundScoreBox = document.createElement("div"); //creates a div element 'score box' for the score for each round.
  columnRoundScoreBox.setAttribute('class', 'round-score-box cloud-box');

  let columnNewResult = document.createElement("h3");
  columnNewResult.setAttribute('class', 'result-entry');
  columnNewResult.innerHTML = displayResult; //h3 element created which displays 'Win' or 'Loss'.

  let columnPlayerTime = document.createElement("h2"); //h2 element to display the time taken to get the result.
  columnPlayerTime.setAttribute('class', 'result-entry');
  if (minutes) { //if statement to determine whether minutes are shown as part of the results.  will only show minutes if minutes = true.
    columnPlayerTime.innerHTML = minutes + "m" + ":" + seconds + "." + milliseconds + "s";
  } else {
    columnPlayerTime.innerHTML = seconds + "." + milliseconds + "s";
  }

  //appends the result and time taken to the div element 'score box'.
  columnRoundScoreBox.appendChild(columnNewResult);
  columnRoundScoreBox.appendChild(columnPlayerTime);

  //appends the score box to the score column.
  displayResultsColumn.appendChild(columnRoundScoreBox);

  //clones the score box so that is can be added to the modal button for scores to be displayed on mobile screens.
  //taken from https://stackoverflow.com/questions/6244985/insert-html-element-two-or-more-times-using-javascript.
  var modalRoundScoreBox = columnRoundScoreBox.cloneNode(true);
  displayResultsModal.appendChild(modalRoundScoreBox);

  //Opens up the end of round message box for player to trigger next round or to notify end of current game.
  rowThree.innerHTML = "";

  //----- End of round messages. -----//
  if (gameRound < 6) { //the following will display if the game round is less than 6 so player is therefore between rounds.
    if (minutes) {
      endOfRoundMessage = `
        <div class="messages-box cloud-box">
          <h2>${messageResult}</h2>
          <h2>Your time: ${minutes}m ${seconds}.${milliseconds}s</h2>
          <h3>Ready for round ${gameRound}?</h3>
          <button class="btn btn-blue" onclick="generateGameArea(false)">Next Round</button>
        </div>
        `;
    } else {
      endOfRoundMessage = `
        <div class="messages-box cloud-box">
          <h2>${messageResult}</h2>
          <h2>Your time: ${seconds}.${milliseconds}s</h2>
          <h3>Ready for round ${gameRound}?</h3>
          <button class="btn btn-blue" onclick="generateGameArea(false)">Next Round</button>
        </div>
        `;
    }
    rowOne.setAttribute('class', 'row position-one-message'); //changes the class so all features can be displayed
    rowThree.setAttribute('class', 'row position-three-message'); //changes the class so all features can be displayed
    rowFour.setAttribute('class', 'row position-four-message'); //changes the class so that the message can be displayed.
    rowThree.innerHTML = endOfRoundMessage; //displays the message in position-three.
  } else { //if five rounds have however occured then the following 'end of game' messages will be displayed.
    //two buttons presented to the user: 'Play again' will launch another game with the same settings. 
    if (minutes) {
      endOfRoundMessage = `
          <div class="messages-box cloud-box">
              <h2>${messageResult}</h2>
              <h2>Your time: ${minutes}m ${seconds}.${milliseconds}s</h2>
              <h2>You matched ${totalMatched}/5</h2>
              <div class="d-flex flex-row">
                <button class="btn btn-red" onclick="displayHighscore()">Continue</button>
              </div>
          </div>
          `;
    } else {
      endOfRoundMessage = `
          <div class="messages-box cloud-box">
            <h2>${messageResult}</h2>
            <h2>Your time: ${seconds}.${milliseconds}s</h2>
            <h2>You matched ${totalMatched}/5</h2>
            <div class="d-flex flex-row justify-content-center">
              <button class="btn btn-red" onclick="displayHighScore()">Continue</button>
            </div>
          </div>
          `;
    }
    rowOne.setAttribute('class', 'row position-one-message'); //changes the class so all features can be displayed
    rowThree.setAttribute('class', 'row position-three-message'); //changes the class so all features can be displayed
    rowFour.setAttribute('class', 'row position-four-message'); //changes the class so that the message can be displayed.
    rowThree.innerHTML = endOfRoundMessage; //displays the message in position-three.
  }
}

function resultSound(score) {
  winSound = document.createElement("audio");
  winSound.src = "assets/sounds/win.wav"; //sets the sound to play for a win.
  looseSound = document.createElement("audio");
  looseSound.src = "assets/sounds/loose.wav"; //sets the sound to play for a loose.

  (score === (computerPattern.length)) ? winSound.play(): looseSound.play(); //plays sounds when the player makes a match or not.
}

/*
displays the end game messages depending on what the player selected and the current state of the high scores in local storage.
*/
function displayHighScore() {
  console.log("this is the highscore function calling out that the final score is " + gameScore);
  console.log("the difficulty is " + difficultySelected);
  let finalScore = gameScore.toFixed(2); //sets the finalScore variable that will be used in this function.
  let currentHighScores; //the variable that will be used for the local storage high scores to be read.

  rowOne.innerHTML = ""; //clears row one for the message to be displayed.
  rowThree.innerHTML = ""; //clears row three for the message to be displayed.

  //sets currentHighScores to the correct local storage object depending on difficulty selected.
  switch (difficultySelected) {
    case 0:
      console.log("switch case part: this message is displaying if you selected a custom game (1)"); //if custom game selected score will not be saved so no local stoarge object selected.
      break;
    case 1:
      console.log("switch case part: this message is displaying if you selected Easy (1)")
      currentHighScores = JSON.parse(localStorage.getItem('highScores-Easy')) || []; //get what is in storage, OR if doing this for the first time we will create an empty array.
      break;
    case 2:
      console.log("switch case part: this message is displaying if you selected Medium (1)")
      currentHighScores = JSON.parse(localStorage.getItem('highScores-Medium')) || []; //get what is in storage, OR if doing this for the first time we will create an empty array.
      break;
    case 3:
      console.log("switch case part: this message is displaying if you selected Hard (1)")
      currentHighScores = JSON.parse(localStorage.getItem('highScores-Hard')) || []; //get what is in storage, OR if doing this for the first time we will create an empty array.
      break;
    case 4:
      console.log("switch case part: this message is displaying if you selected Very Hard (1)")
      currentHighScores = JSON.parse(localStorage.getItem('highScores-veryHard')) || []; //get what is in storage, OR if doing this for the first time we will create an empty array.
      break;
  }

  //determines the message displayed and the final score message depending on whether a custom game was selected, the score achieved and the state of local storage object.
  if (difficultySelected === 0) { //sets variables to determine the message if a custom game was selected 
    endOfGameMessage = false;
    finalScoreMessage = "";
    console.log("Choosing message to display part: this is displaying if you selected a custom game (2)");
    console.log("message choice is " + endOfGameMessage);
  } else { //sets variables to determine the message displayed if a set difficulty was selected
    if (currentHighScores.length < 3) { //each highscore object can have three entries; determines if a score enters by default if there are currently less that three entries.
      endOfGameMessage = true;
      console.log("Choosing message to display part: this is displaying if the current games high scores length are less than 3 (2)");
      console.log("message choice is " + endOfGameMessage);
    } else if (finalScore > currentHighScores[2].score) { //if there are three entries; determines if the current score is higher than the existing value at position 2.
      endOfGameMessage = true;
      console.log("Choosing message to display part: this is displaying if the current games high scores length is 3 but you have a new high score (2)");
      console.log("message choice is " + endOfGameMessage);
    } else { // sets variables if three entries and high score is less than that in position 0 (so score is not high enough).
      endOfGameMessage = false;
      finalScoreMessage = "No high score this time.";
      console.log("Choosing message to display part: this is displaying if you have NOT got a new high score (2)");
      console.log("message choice is " + endOfGameMessage);
    }
  }

  //details the message displayed depending on the boolean value determined above.
  if (endOfGameMessage === true) {
    console.log("From the display message part: if this message is displaying you got a hew high score");
    let highScoreMessage = `
      <div class="save-score-box cloud-box d-flex flex-column">
        <h1>New high score!</h1>
        <h1>${finalScore}</h1>
        <h2>Enter name to save score</h2>
        <form class="d-flex flex-column align-items-center">
          <input type="text" name="playername" id="playername" placeholder="playername"/>
          <button type="submit" class="btn btn-green" id="saveScoreBtn" onclick="saveHighScore(event)" disabled>Save</button>
        </form>
        <button class="btn btn-red" onclick="playAgain()">Play again?</button>
        <button class="btn btn-blue" onclick="mainMenu(true)">Main menu</button>
      </div>
    `;
    rowTwo.innerHTML = highScoreMessage; //displays message in the middle of the screen in row two.
    let playername = document.getElementById('playername');
    playername.addEventListener('keyup', function () {
      saveScoreBtn.disabled = !playername.value; //score button disabled if no value in username form entry.
    });
  } else {
    console.log("From the display message part: if this message is displaying you chose a custom game or did not get a high score");
    let highScoreMessage = `
      <div class="save-score-box cloud-box d-flex flex-column">
        <h1>Your score:</h1>
        <h1>${finalScore}</h1>
        <h2>${finalScoreMessage}</h2>
        <button class="btn btn-red" onclick="playAgain()">Play again?</button>
        <button class="btn btn-blue" onclick="mainMenu(true)">Main menu</button>
      </div>
    `;
    rowTwo.innerHTML = highScoreMessage; //displays message in the middle of the screen in row two.
  }
}

/*
Saves highscores as Key/Value pairs in the correct object in local storage based in difficulty selected.
*/
function saveHighScore(event) {
  console.log("clicked the save button")
  console.log("the difficulty is " + difficultySelected);
  event.preventDefault(); //prevents default action of form button.
  let playername = document.getElementById('playername'); //gets the value the user have entered to save score against

  //sets the object to add score to depending on difficulty selected.
  switch (difficultySelected) {
    case 1:
      const highScoresEasy = JSON.parse(localStorage.getItem("highScores-Easy"));
      const savedScoreEasy = {
        score: gameScore.toFixed(2), //saves score to two decimal places.
        name: playername.value //value entered by the user as 'name'.
      };
      highScoresEasy.push(savedScoreEasy); //add new score and player name to local storage object.
      highScoresEasy.sort((a, b) => b.score - a.score); //sorts the scores in descending order.
      highScoresEasy.splice(3); //ensures that there are no more than three entries saved in the high score object.
      localStorage.setItem('highScores-Easy', JSON.stringify(highScoresEasy)); //saves the new score to local storage.
      break;
    case 2:
      const highScoresMedium = JSON.parse(localStorage.getItem("highScores-Medium"));
      const savedScoreMedium = {
        score: gameScore.toFixed(2),
        name: playername.value
      };
      highScoresMedium.push(savedScoreMedium);
      highScoresMedium.sort((a, b) => b.score - a.score);
      highScoresMedium.splice(3);
      localStorage.setItem('highScores-Medium', JSON.stringify(highScoresMedium));
      break;
    case 3:
      const highScoresHard = JSON.parse(localStorage.getItem("highScores-Hard"));
      const savedScoreHard = {
        score: gameScore.toFixed(2),
        name: playername.value
      };
      highScoresHard.push(savedScoreHard);
      highScoresHard.sort((a, b) => b.score - a.score);
      highScoresHard.splice(3);
      localStorage.setItem('highScores-Hard', JSON.stringify(highScoresHard));
      break;
    case 4:
      const highScoresVeryHard = JSON.parse(localStorage.getItem("highScores-veryHard"));
      const savedScoreVeryHard = {
        score: gameScore.toFixed(2),
        name: playername.value
      };
      highScoresVeryHard.push(savedScoreVeryHard);
      highScoresVeryHard.sort((a, b) => b.score - a.score);
      highScoresVeryHard.splice(3);
      localStorage.setItem('highScores-veryHard', JSON.stringify(highScoresVeryHard));
      break;
  }
  saveScoreBtn.disabled = true; //disables the save game button so score cannot be saved twice.
}

/*
sets up the necessary variables and elements should the player chose 'play again' from the 'end of game' messages.
*/
function playAgain() {
  let scoreColumn = document.getElementById("score-column");
  scoreColumn.remove(); //removes the column so the the previous games results are not shown (score column is set up again in generateGameArea function.
  document.getElementById("score-modal").innerHTML = ""; //removes the previous games results from the modal.

  gameRound = 1; //resets the game round count.
  totalMatched = 0; //resets the score.
  gameScore = 0; //resets the score.

  generateGameArea(true);
}