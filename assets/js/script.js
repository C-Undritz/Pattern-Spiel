//builds the require elements for the positioning of the menu and game elements later in the code/game.
document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("container");

  let mainRow = document.createElement("div");
  mainRow.setAttribute('class', 'row d-flex align-items-center justify-content-center');
  mainRow.setAttribute('id', 'game-score-row');
  container.appendChild(mainRow);

  //the game and menu elements are all displayed within the gameColumn
  let gameColumn = document.createElement("div");
  gameColumn.setAttribute('id', 'game-column');
  mainRow.appendChild(gameColumn);

  //positioning of the menu and game elements is within the five rows below.  CSS styles for the ids ensure a 100vh total at all times.
  let newRowZero = document.createElement("div");
  newRowZero.setAttribute('id', 'position-zero');

  let newRowOne = document.createElement("div");
  newRowOne.setAttribute('id', 'position-one');

  let newRowTwo = document.createElement("div");
  newRowTwo.setAttribute('id', 'position-two');

  let newRowThree = document.createElement("div");
  newRowThree.setAttribute('id', 'position-three');

  let newRowFour = document.createElement("div");
  newRowFour.setAttribute('id', 'position-four');

  //appends the five row to the gameColumn.
  gameColumn.appendChild(newRowZero);
  gameColumn.appendChild(newRowOne);
  gameColumn.appendChild(newRowTwo);
  gameColumn.appendChild(newRowThree);
  gameColumn.appendChild(newRowFour);

  mainMenu(false);
});

/*------------------------- GLOBAL VARIABLES -------------------------*/

let gridSize; //either 3 or 4, used to generate the grid and also the pattern arrays length.
let colourPalette; //either 4, 5 or 6, used to limit the number range in the pattern arrays generated and the colour palette.
let viewTimerSelected; //either 0, 5, 10 or 15, used to determine the number of seconds the player can view the pattern for.
let userColourSelected; //assigned a colour from the palette and used to pass this value to the addColour function.
let computerPattern; //array of random numbers for the creation the initial pattern for player to observe.
let userPattern; //array of numbers generated from the user added colours in the grid. 
let gameRound; //each game is 5 rounds, this variable tracks the round number between functions.
let colourPickSound; //the sound played when a colour is selected from the palette.
let colourAddSound; //the sound played when a colour is added to the grid.
let milliseconds; //the millisecond count of the player timer that records the players time to complete a pattern. 
let seconds; //the second count of the player timer that records the players time to complete a pattern. 
let minutes; //the minute count of the player timer that records the players time to complete a pattern. 
let totalScore; //records the win/loss score within the five round game.
let timer;


/*------------------------- MENU FUNCTIONS -------------------------*/

/*
sets up the five rows to contain options presented for selection within the menu screen and presents initial options.
*/
function mainMenu(gameStarted) {
  console.log("game started is " + gameStarted);
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
  }

  //selects game-column and sets the classes needed for the menu.
  let gameColumn = document.getElementById("game-column");
  gameColumn.setAttribute('class', 'col-12 order-2 d-flex align-items-center flex-column');

  //selects the 1st row and sets the classes needed for the menu.
  let rowZero = document.getElementById("position-zero");
  rowZero.setAttribute('class', 'row position-zero-menu');

  //selects the 2nd row and sets the classes needed for the menu.
  let rowOne = document.getElementById("position-one");
  rowOne.setAttribute('class', 'row position-one-menu');

  //selects the 3rd row and sets the classes needed for the menu.
  let rowTwo = document.getElementById("position-two");
  rowTwo.setAttribute('class', 'row position-two-menu');

  //selects the 4th row and sets the classes needed for the menu.
  let rowThree = document.getElementById("position-three");
  rowThree.setAttribute('class', 'row position-three-menu');

  //selects the 5th row and sets the classes needed for the menu.
  let rowFour = document.getElementById("position-four");
  rowFour.setAttribute('class', 'row position-four-menu');

  let gameTitle = ` 
    <h1>Pattern Spiel!</h2>
  `;

  let mainMenuButtons = `
  <button onclick="selectDifficulty()">Start</button>
  <button href"instructions.html">How to Play</button>
  `;

  document.getElementById('position-one').innerHTML = gameTitle; //sets the gameTitle into position-one row.
  document.getElementById('position-three').innerHTML = mainMenuButtons; //sets the menu buttons to be initially shown.
}

/*
defines a set of buttons for the player to select pre-set difficulties or a custom game.  Player can also select to go back one level up.
*/
function selectDifficulty() {
  let selectDifficultyText = `
  <h2>Select Difficulty</h2>
  `;

  //each button has an "onclick" attribute that calls the required function with an associated parameter where required. 
  let difficultySelectionButtons = `
  <button class="" id="" onclick="setDifficultyVariables(1)">Very easy</button>
  <button class="" id="" onclick="setDifficultyVariables(2)">Easy</button>
  <button class="" id="" onclick="setDifficultyVariables(3)">Medium</button>
  <button class="" id="" onclick="setDifficultyVariables(4)">Hard</button>
  <button class="" id="" onclick="setDifficultyVariables(5)">Very hard</button>
  <button class="" id="" onclick="gridSizeSelection()">Custom game</button>
  <button class="" id="" onclick="mainMenu(false)">return</button>
  `;

  document.getElementById('position-two').innerHTML = selectDifficultyText; //sets the menu guide text to position-two row.
  document.getElementById('position-three').innerHTML = difficultySelectionButtons; //sets the buttons to position-three row.
}

/*
sets the variables required for the pre-set difficulties.
*/
function setDifficultyVariables(difficulty) {
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
    case 5:
      gridSize = 3;
      colourPalette = 5;
      viewTimerSelected = 5;
      break;
  }
  console.log("Grid size is " + gridSize);
  console.log("Colour selection is " + colourPalette);
  console.log("Timer selected is " + viewTimerSelected);
  playGame(viewTimerSelected, true); //playGame expects two parameters, the 'true' informs that the user has selected pre-set difficulties.
}

/*
defines the first set of custom difficulty buttons to select the grid size.  Player can also select to go back one level up.
*/
function gridSizeSelection() {
  let selectOptionsText = `
      <h2>Select grid size</h2>
    `;

  //each button has an "onclick" attribute that calls the next function with an associated parameter where required. 
  let optionButtons = `
    <button class="gameOptionsButton" id="3" onclick="colourNumberSelection(3)">3 x 3 grid</button>
    <button class="gameOptionsButton" id="4" onclick="colourNumberSelection(4)">4 x 4 grid</button>
    <button class="" id="" onclick="selectDifficulty()">return</button>
    `;
  document.getElementById('position-two').innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
  document.getElementById('position-three').innerHTML = optionButtons; //sets the buttons to position-three row.
}

/*
defines the second set of custom difficulty buttons to select the grid size.  Player can also select to go back one level up.
*/
function colourNumberSelection(gridSelection) {
  gridSize = gridSelection; //the parameter passed to the function is the grid selection size; value assigned to global variable 'gridsize'.
  let selectOptionsText = `
      <h2>Select number of possible colours</h2>
    `;

  //each button has an "onclick" attribute that calls the next function with an associated parameter where required. 
  let optionButtons = `
    <button class="gameOptionsButton" id="4" onclick="viewTimerSelection(4)">Up to 4 colours</button>
    <button class="gameOptionsButton" id="5" onclick="viewTimerSelection(5)">Up to 5 colours</button>
    <button class="gameOptionsButton" id="6" onclick="viewTimerSelection(6)">Up to 6 colours</button>
    <button class="" id="" onclick="gridSizeSelection()">return</button>
    `;
  document.getElementById('position-two').innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
  document.getElementById('position-three').innerHTML = optionButtons; //sets the buttons to position-three row.
}

/*
defines the final set of custom difficulty buttons to select how long the pattern can be viewed.  Player can also select to go back one level up.
*/
function viewTimerSelection(colourSelection) {
  colourPalette = colourSelection; //the parameter passed to the function is the colour number selection size; value then assigned to global variable 'colourPalette'.
  let selectOptionsText = `
      <h2>Select how long you will be able to view the pattern</h2>
    `;

  //each button has an "onclick" attribute that calls the next function with an associated parameter where required. 
  let optionButtons = `
    <button class="gameOptionsButton" id="0" onclick="playGame(0, false)">No Timer</button>
    <button class="gameOptionsButton" id="5" onclick="playGame(5, false)">5 Seconds</button>
    <button class="gameOptionsButton" id="10" onclick="playGame(10, false)">10 seconds</button>
    <button class="gameOptionsButton" id="15" onclick="playGame(15, false)">15 seconds</button>
    <button class="" id="" onclick="colourNumberSelection(gridSize)">return</button>
    `;
  document.getElementById('position-two').innerHTML = selectOptionsText; //sets the menu guide text to position-two row.
  document.getElementById('position-three').innerHTML = optionButtons; //sets the buttons to position-three row.
}

/*
Defines the last set of buttons that launch the game with the chosen options, allows user to go up level or go to the main menu.
*/
function playGame(viewTimerSelection, gameChoice) {
  viewTimerSelected = viewTimerSelection;

  gameRound = 1; //sets game round to the 1st round prior to calling generateGameArea().
  totalScore = 0; //sets total score to 0 upon a new game.

  let selectOptionsText = `
      <h2>Ready?</h2>
    `;

  if (gameChoice) {
    //sets buttons if the player arrived here from the pre-set difficulty options.  Needed so that the return button directs correctly.
    //Play Game button calls the next function that generates the game area.
    let optionButtons = `
      <button class="gameOptionsButton" id="0" onclick="generateGameArea(true)">Play Game!</button> 
      <button class="" id="" onclick="selectDifficulty()">return</button>
      <button class="" id="" onclick="mainMenu(false)">Main menu</button>
      `;
    document.getElementById('position-two').innerHTML = selectOptionsText;
    document.getElementById('position-three').innerHTML = optionButtons;
  } else {
    //sets buttons if the player arrived here from the customs difficulty options.  Needed so that the return button directs correctly.
    //Play Game button calls the next function that generates the game area.
    let optionButtons = `
    <button class="gameOptionsButton" id="0" onclick="generateGameArea(true)">Play Game!</button>
      <button class="" id="" onclick="viewTimerSelection(colourPalette)">return</button>
      <button class="" id="" onclick="mainMenu(false)">Main menu</button>
      `;
    document.getElementById('position-two').innerHTML = selectOptionsText;
    document.getElementById('position-three').innerHTML = optionButtons;
  }
}

/*------------------------- GAME FUNCTIONS -------------------------*/

/*
The function called that generates the required grid using the 'gridSize' variable.
The requirement parameter expects a true or false value.
- True will generate a grid with the associated attributes needed for the computer to display the pattern to be memorised.
- False will generate a grid with the associated attributes needed for the player grid to be filled in with colours to match the pattern.
*/
function generateGrid(requirement) {
  let grid = `
    <div class="container${gridSize}x${gridSize}">
    `;
  if (requirement) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
      let rowGrid = `
              <div class="board${gridSize} squares" id="${i}"></div>
              `;
      grid += rowGrid;
    }
  } else {
    for (let i = 0; i < (gridSize * gridSize); i++) {
      let rowGrid = `
        <div class="board${gridSize} squares" id="square${i}" onclick="addColour(${i})"></div>
        `;
      grid += rowGrid;
    }
  }
  grid += `
        </div>
    `;

  return grid;
}

/*
sets up the five rows to contain the elements of the game display, the score column and the responsive elements of the score display.
*/
function generateGameArea(newGame) {
  console.log("is this a new game? " + newGame);

  //The 'newGame' parameter expects a true or false value and is needed for the five rounds of one game to take place. 
  //- For a new game the value is 'true' and the 'game column' and 'score-column is set up for the first time.  
  //- Between rounds the value is false so the score column is maintained and the between round message needs to be removed.

  if (newGame) { //the following happens if newGame = true; therefore the start of a new game.
    let mainRow = document.getElementById("game-score-row");

    document.getElementById('position-one').innerHTML = "";
    document.getElementById('position-two').innerHTML = "";
    document.getElementById('position-three').innerHTML = "";

    //creates the score column and appends to the game-score-row. Uses bootstrap classes so that this will only show on displays ≥992px.
    let scoreColumn = document.createElement("div");
    scoreColumn.setAttribute('id', 'score-column');
    scoreColumn.setAttribute('class', 'col-2 order-1 d-none d-lg-block d-flex align-items-center flex-column');
    mainRow.appendChild(scoreColumn);

    //selects game-column and sets the classes needed for the game screen (main change is from col-12 to col-10 to accomodate the score-column).
    let gameColumn = document.getElementById("game-column");
    gameColumn.setAttribute('class', 'col-10 order-2 d-flex align-items-center flex-column');

    //selects the 1st row and sets the classes needed for the game screen.
    let rowZero = document.getElementById("position-zero");
    rowZero.setAttribute('class', 'row position-zero-game');

    //selects the 2nd row and sets the classes needed for the game screen.
    let rowOne = document.getElementById("position-one");
    rowOne.setAttribute('class', 'row position-one-game');

    //selects the 3rd row and sets the classes needed for the game screen.
    let rowTwo = document.getElementById("position-two");
    rowTwo.setAttribute('class', 'row position-two-game');

    //selects the 4th row and sets the classes needed for the game screen.
    let rowThree = document.getElementById("position-three");
    rowThree.setAttribute('class', 'row position-three-game');

    //selects the 5th row and sets the classes needed for the game screen.
    let rowFour = document.getElementById("position-four");
    rowFour.setAttribute('class', 'row position-four-game');

    //the main menu button and title of the score column for displays ≥992px.
    let scoreColumnTitle = `
    <div id="score-column-header">
      <button onclick="mainMenu(true)" id="scoreColumnMenuButton">Main menu</button>
      <h1>Score</h1>
    </div>
    `;

    document.getElementById('score-column').innerHTML = scoreColumnTitle;

    //the main menu and score buttons for displays <992px.
    let mobileButtons = `
    <div id="mobile-buttons" class="d-flex flex-row d-lg-none">
      <button onclick="mainMenu(true)" id="mobileViewMenuButton">Main menu</button>
      <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">Score</button>
    </div>
    `;

    document.getElementById('position-zero').innerHTML = mobileButtons; //mobile buttons are displays top and center of the game screen.

  } else { //the following happens if newGame = false; therefore between rounds of a game.
    let rowOne = document.getElementById("position-one");
    rowOne.innerHTML = ""; //removes the HTML generated by functions patternCompareComputer and patternComparePlayer between rounds.

    let rowThree = document.getElementById("position-three");
    rowThree.innerHTML = ""; //remove the end of round message between rounds.
    rowThree.setAttribute('class', 'row position-three-game'); //sets the classes needed for the game screen. 
  }

  let grid = generateGrid(true); //calls the generateGrid function to display a grid for the computer to display the pattern.
  document.getElementById('position-two').innerHTML = grid;

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
  console.log("computer pattern array: " + newPatternArray);
  computerPattern = newPatternArray; //assigns new array to the global variable computerPattern.

  convertArrayToPattern(computerPattern); //passes the new array to convertArrayToPattern() to have the pattern shown as colours on the grid.
}

/*
determines whether a button should be shown (if no timer has been selected) or whether a timer should be shown.
*/
function setViewTimer() {
  if (viewTimerSelected === 0) { //sets a button if no timer selected.
    let goButton = `
      <button class="gameOptionsButton" id="go-button" onclick="generatePlayerGrid()">Go!</button>
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
  let timerDisplay = document.getElementById("position-one"); //timer displays in position-one.
  let currentTimer = document.createElement("h2"); 
  currentTimer.setAttribute('id', 'current-timer'); 
  timerDisplay.appendChild(currentTimer);

  let timeLeft = viewTimerSelected;
  let patternDisplayTimer = setInterval(function () {
    if (timeLeft <= 0) { //stops timer when value reaches 0 and triggers the creation of the player grid.
      clearInterval(patternDisplayTimer);
      console.log("timer complete");
      generatePlayerGrid();
    }
    currentTimer.innerHTML = timeLeft;
    timeLeft -= 1;
    console.log("the time left is: " + timeLeft);
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
  document.getElementById('position-one').innerHTML = ""; //clears the computer generated pattern from the game screen.

  let grid = generateGrid(false); //calls the generateGrid function with a value of false so that the player grid is created.
  document.getElementById('position-two').innerHTML = grid;

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
        <div id="palette-area">
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

  document.getElementById('position-three').innerHTML = palette;

  userColourSelected = ""; //ensures that the userColourSelected value (from pickColour function) is not maintained between rounds/games.

  generateSubmitButton();
  pickColour(); //pickColour called so that event listeners for palette are set up.
}

/*
creates a submit button at the bottom of the game area which will call checkCompletion() function when selected.
*/
function generateSubmitButton() {
  let submitButton = `
    <button id="submit-button" onclick="checkCompletion()">Submit</button>`;
  document.getElementById('position-four').innerHTML = submitButton;
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
    console.log(userColourSelected);
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
    console.log(userColourSelected);
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
    console.log(userColourSelected);
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
    console.log(userColourSelected);
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
      console.log(userColourSelected);
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
      console.log(userColourSelected);
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
    selectedSquare.style.backgroundColor = userColourSelected; // ssigns the colour selected from the palette to the grid square.
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
  var gridOfSquares = document.getElementsByClassName('squares');
  let squareCount = gridOfSquares.length;
  userPattern = []; //the array for the colour values.
  for (let i = 0; i < squareCount; i++) { //for loop to check each square and add a value to the array depending on colour found.
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
    <h2>Click button to compare patterns</h2>
    <button class="gameOptionsButton" id="switch-button" onclick="patternCompareComputer()">Switch</button>
    `;
  document.getElementById('position-one').innerHTML = switchButton;

  let grid = generateGrid(true); //Parameter is true as the grid needed does not need to be interacted with.
  document.getElementById('position-two').innerHTML = grid; //creates the grid on the game screen.

  convertArrayToPattern(userPattern); //calls the function to convert the userPattern array to a pattern on the grid.
}

//allows the player to switch from viewing the computer pattern to their own again.
function patternCompareComputer() {
  let switchButton = `
    <h2>Click button to compare patterns</h2>
    <button class="gameOptionsButton" id="switch-button" onclick="patternComparePlayer()">switch</button>
    `;
  document.getElementById('position-one').innerHTML = switchButton;

  let grid = generateGrid(true); //Parameter is true as the grid needed does not need to be interacted with.
  document.getElementById('position-two').innerHTML = grid; //creates the grid on the game screen.

  convertArrayToPattern(computerPattern); //calls the function to convert the computerPattern array to a pattern on the grid.
}

/*
checks results, display relevant messages and options to the player and progresses the game.
*/
function gameStatus() {
  gameRound += 1; //progresses the game round by 1.
  let score = 0; 
  let result;

  let submitButton = document.getElementById('submit-button');
  submitButton.remove(); //removes the submit button.

  //determines the player score by interating through both arrays and where the values equal each other at each index, 1 is added to the score.
  for (let i = 0; i < computerPattern.length; i++) {
    if (userPattern[i] === computerPattern[i]) {
      score += 1;
    }
  }

  console.log("the result is " + score);

  //determines a win/loss by checking if the score is the same as the array length (9 or 16 depending on grid size chosen).
  if (score === userPattern.length) {
    result = "Win";
    totalScore += 1;
  } else {
    result = "Loss";
  }

  //Adds result of the round to the score column.
  let displayResultsColumn = document.getElementById("score-column");
  let displayResultsModal = document.getElementById("score-modal");

  let columnRoundScoreBox = document.createElement("div"); //creates a div element 'score box' for the score for each round.
  columnRoundScoreBox.setAttribute('class', 'round-score-box');

  let columnNewResult = document.createElement("h3");
  columnNewResult.setAttribute('class', 'result-entry');
  columnNewResult.innerHTML = result;  //h3 element created which displays 'Win' or 'Loss'.

  let columnPlayerTime = document.createElement("h2"); //h2 element to display the time taken to get the result.
  columnPlayerTime.setAttribute('class', 'result-entry');
  if (minutes) { //if statement to determine whether minutes are shown as part of the results.  will only show minutes if minutes = true.
    columnPlayerTime.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
  } else {
    columnPlayerTime.innerHTML = seconds + ":" + milliseconds;
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
  document.getElementById('position-three').innerHTML = "";
  if (gameRound < 6) { //the following will display if the game round is less than 6 so player is therefore between rounds.
    let message = `
        <div id="messages-box">
            <h2>You got a ${result}</h2>
            <h2>Your time: ${seconds}.${milliseconds}</h2>
            <h3>Ready for round ${gameRound}?</h3>
            <button onclick="generateGameArea(false)">Next Round</button>
        </div>
        `;

    let rowThree = document.getElementById("position-three");
    rowThree.setAttribute('class', 'row position-three-message'); //changes the class so that the message can be displayed.

    document.getElementById('position-three').innerHTML = message; //displays the message in position-three.

  } else { //if five rounds have however occured then the following 'end of game' messages will be displayed.
    //only displayed if the player has achieved a win on all five rounds.
    //two buttons presented to the user: 'Play again' will launch another game with the same settings.  'Main menu' for the menu.
    if (totalScore === 5) { 
      let message = `
            <div id="messages-box">
                <h2>You got top marks!</h2>
                <button onclick="playAgain()">Play again?</button> 
                <button onclick="mainMenu(true)">Main menu"</button>
            </div>
            `;
      let rowThree = document.getElementById("position-three");
      rowThree.removeAttribute('class');
      rowThree.setAttribute('class', 'row position-three-message'); //changes the class so that the message can be displayed.

      document.getElementById('position-three').innerHTML = message; //displays the message in position-three.

    } else {
      //only displayed if the player got any 'loss' result on the last game of five rounds.
      //two buttons presented to the user: 'Play again' will launch another game with the same settings.  'Main menu' for the menu.
      let message = `
            <div id="messages-box">
                <h2>You scored ${totalScore}</h2>
                <button onclick="playAgain()">Play again?</button>
                <button onclick="mainMenu(true)">Main menu</button>
            </div>
            `;
      let rowThree = document.getElementById("position-three");
      rowThree.removeAttribute('class');
      rowThree.setAttribute('class', 'row position-three-message'); //changes the class so that the message can be displayed.

      document.getElementById('position-three').innerHTML = message; //displays the message in position-three.
    }
  }
}

/*
sets up the necessary variables and elements should the player chose 'play again' from the 'end of game' messages.
*/
function playAgain() {
  let scoreColumn = document.getElementById("score-column");
  scoreColumn.remove();

  gameRound = 1; //resets the game round count.
  totalScore = 0; //resets the score.

  generateGameArea(true);
}