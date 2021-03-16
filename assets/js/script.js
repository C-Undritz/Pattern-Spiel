document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("container");

  let mainRow = document.createElement("div");
  mainRow.setAttribute('class', 'row d-flex align-items-center justify-content-center');
  mainRow.setAttribute('id', 'game-score-row');
  container.appendChild(mainRow);

  let gameColumn = document.createElement("div");
  gameColumn.setAttribute('class', 'col-12 order-2 d-flex align-items-center flex-column');
  gameColumn.setAttribute('id', 'game-column');
  mainRow.appendChild(gameColumn);

  let newRowZero = document.createElement("div");
  newRowZero.setAttribute('class', 'row position-zero-menu');
  newRowZero.setAttribute('id', 'position-zero');

  let newRowOne = document.createElement("div");
  newRowOne.setAttribute('class', 'row title-row position-one-menu');
  newRowOne.setAttribute('id', 'position-one');

  let newRowTwo = document.createElement("div");
  newRowTwo.setAttribute('class', 'row position-two-menu');
  newRowTwo.setAttribute('id', 'position-two');

  let newRowThree = document.createElement("div");
  newRowThree.setAttribute('class', 'row position-three-menu');
  newRowThree.setAttribute('id', 'position-three');

  let newRowFour = document.createElement("div");
  newRowFour.setAttribute('class', 'row position-four-menu');
  newRowFour.setAttribute('id', 'position-four');

  gameColumn.appendChild(newRowZero);
  gameColumn.appendChild(newRowOne);
  gameColumn.appendChild(newRowTwo);
  gameColumn.appendChild(newRowThree);
  gameColumn.appendChild(newRowFour);

  let gameTitle = `
    <h1>Pattern Spiel!</h2>
  `

  let mainMenuButtons = `
  <button onclick="selectDifficulty()">Start</button>
  <a href="instructions.html"><button>How to play</button></a>
  `
  document.getElementById('position-one').innerHTML = gameTitle;
  document.getElementById('position-three').innerHTML = mainMenuButtons;
})

let gridSize;
let colourPalette;
let viewTimerSelected;
let userColourSelected;
let computerPattern;
let userPattern;
let gameRound;
let startedGame = false;
var timer;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
let totalScore = 0;

function mainMenu(gameStarted) {
  console.log("game started is " + gameStarted);
  document.getElementById('position-zero').innerHTML = "";
  document.getElementById('position-one').innerHTML = "";
  document.getElementById('position-two').innerHTML = "";
  document.getElementById('position-three').innerHTML = "";
  document.getElementById('position-four').innerHTML = "";

  if (gameStarted) {
    let scoreColumn = document.getElementById("score-column");
    scoreColumn.remove();
  }

  let gameColumn = document.getElementById("game-column");
  gameColumn.removeAttribute('class');
  gameColumn.setAttribute('class', 'col-12 order-2 d-flex align-items-center flex-column');

  let rowZero = document.getElementById("position-zero");
  rowZero.removeAttribute('class');
  rowZero.setAttribute('class', 'row position-zero-menu');

  let rowOne = document.getElementById("position-one");
  rowOne.removeAttribute('class');
  rowOne.setAttribute('class', 'row position-one-menu');

  let rowTwo = document.getElementById("position-two");
  rowTwo.removeAttribute('class');
  rowTwo.setAttribute('class', 'row position-two-menu');

  let rowThree = document.getElementById("position-three");
  rowThree.removeAttribute('class');
  rowThree.setAttribute('class', 'row position-three-menu');

  let rowFour = document.getElementById("position-four");
  rowFour.removeAttribute('class');
  rowFour.setAttribute('class', 'row position-four-menu');

  let gameTitle = `
    <h1>Pattern Spiel!</h2>
  `;

  let mainMenuButtons = `
  <button onclick="selectDifficulty()">Start</button>
  <button href"instructions.html">How to Play</button>
  `;
  document.getElementById('position-one').innerHTML = gameTitle;
  document.getElementById('position-three').innerHTML = mainMenuButtons;
}

function selectDifficulty() {
  let selectDifficultyText = `
  <h2>Select Difficulty</h2>
  `;
  let difficultySelectionButtons = `
  <button class="" id="" onclick="setDifficultyVariables(1)">Very easy</button>
  <button class="" id="" onclick="setDifficultyVariables(2)">Easy</button>
  <button class="" id="" onclick="setDifficultyVariables(3)">Medium</button>
  <button class="" id="" onclick="setDifficultyVariables(4)">Hard</button>
  <button class="" id="" onclick="setDifficultyVariables(5)">Very hard</button>
  <button class="" id="" onclick="gridSizeSelection()">Custom game</button>
  <button class="" id="" onclick="mainMenu(false)">return</button>
  `;
  document.getElementById('position-two').innerHTML = selectDifficultyText;
  document.getElementById('position-three').innerHTML = difficultySelectionButtons
}

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
  playGame(viewTimerSelected, true);
}

function gridSizeSelection() {
  let selectOptionsText = `
      <h2>Select grid size</h2>
    `;
  let optionButtons = `
    <button class="gameOptionsButton" id="3" onclick="colourNumberSelection(3)">3 x 3 grid</button>
    <button class="gameOptionsButton" id="4" onclick="colourNumberSelection(4)">4 x 4 grid</button>
    <button class="" id="" onclick="selectDifficulty()">return</button>
    `;
  document.getElementById('position-two').innerHTML = selectOptionsText;
  document.getElementById('position-three').innerHTML = optionButtons;
}

function colourNumberSelection(gridSelection) {
  gridSize = gridSelection;
  let selectOptionsText = `
      <h2>Select number of possible colours</h2>
    `;
  let optionButtons = `
    <button class="gameOptionsButton" id="4" onclick="viewTimerSelection(4)">Up to 4 colours</button>
    <button class="gameOptionsButton" id="5" onclick="viewTimerSelection(5)">Up to 5 colours</button>
    <button class="gameOptionsButton" id="6" onclick="viewTimerSelection(6)">Up to 6 colours</button>
    <button class="" id="" onclick="gridSizeSelection()">return</button>
    `;
  document.getElementById('position-two').innerHTML = selectOptionsText;
  document.getElementById('position-three').innerHTML = optionButtons;
}

function viewTimerSelection(colourSelection) {
  colourPalette = colourSelection;
  let selectOptionsText = `
      <h2>Select how long you will be able to view the pattern</h2>
    `;
  let optionButtons = `
    <button class="gameOptionsButton" id="0" onclick="playGame(0, false)">No Timer</button>
    <button class="gameOptionsButton" id="5" onclick="playGame(5, false)">5 Seconds</button>
    <button class="gameOptionsButton" id="10" onclick="playGame(10, false)">10 seconds</button>
    <button class="gameOptionsButton" id="15" onclick="playGame(15, false)">15 seconds</button>
    <button class="" id="" onclick="colourNumberSelection(gridSize)">return</button>
    `;
  document.getElementById('position-two').innerHTML = selectOptionsText;
  document.getElementById('position-three').innerHTML = optionButtons;
}

function playGame(viewTimerSelection, gameChoice) {
  viewTimerSelected = viewTimerSelection;

  gameRound = 1;
  console.log("game round is: " + gameRound);

  console.log(gridSize);
  console.log(colourPalette);
  console.log(viewTimerSelected);
  console.log("user has selected a predetermined difficulty: " + gameChoice);

  let selectOptionsText = `
      <h2>Ready?</h2>
    `;

  if (gameChoice) {
    let optionButtons = `
      <button class="gameOptionsButton" id="0" onclick="generateComputerGrid(1)">Play Game!</button>
      <button class="" id="" onclick="selectDifficulty()">return</button>
      <button class="" id="" onclick="mainMenu(false)">Main menu</button>
      `;
    document.getElementById('position-two').innerHTML = selectOptionsText;
    document.getElementById('position-three').innerHTML = optionButtons;
  } else {
    let optionButtons = `
    <button class="gameOptionsButton" id="0" onclick="generateComputerGrid(1)">Play Game!</button>
      <button class="" id="" onclick="viewTimerSelection(colourPalette)">return</button>
      <button class="" id="" onclick="mainMenu(false)">Main menu</button>
      `;
    document.getElementById('position-two').innerHTML = selectOptionsText;
    document.getElementById('position-three').innerHTML = optionButtons;
  }
  totalScore = 0;
}

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

function generateComputerGrid(newGame) {
  console.log("is this a new game? " + newGame);

  // The 'newGame' parameter is needed for the five rounds to take place.  For the first round the 'game column' and 'score-column is set up for the first time and game state is '1'.  
  // Between rounds the 'game-column' does not need setting up again, the score column needs to be maintained and the between round message needs to be removed.
  if (newGame) {
    let mainRow = document.getElementById("game-score-row");

    document.getElementById('position-one').innerHTML = "";
    document.getElementById('position-two').innerHTML = "";
    document.getElementById('position-three').innerHTML = "";

    let scoreColumn = document.createElement("div");
    scoreColumn.setAttribute('id', 'score-column');
    scoreColumn.setAttribute('class', 'col-2 order-1 d-none d-lg-block d-flex align-items-center flex-column');
    mainRow.appendChild(scoreColumn);

    let gameColumn = document.getElementById("game-column")
    gameColumn.removeAttribute('class');
    gameColumn.setAttribute('class', 'col-10 order-2 d-flex align-items-center flex-column');

    let rowZero = document.getElementById("position-zero");
    rowZero.removeAttribute('class');
    rowZero.setAttribute('class', 'row position-zero-game');

    let rowOne = document.getElementById("position-one");
    rowOne.removeAttribute('class');
    rowOne.setAttribute('class', 'row position-one-game');

    let rowTwo = document.getElementById("position-two");
    rowTwo.removeAttribute('class');
    rowTwo.setAttribute('class', 'row position-two-game');

    let rowThree = document.getElementById("position-three");
    rowThree.removeAttribute('class');
    rowThree.setAttribute('class', 'row position-three-game');

    let rowFour = document.getElementById("position-four");
    rowFour.removeAttribute('class')
    rowFour.setAttribute('class', 'row position-four-game');


    let scoreColumnTitle = `
    <div id="score-column-header">
      <button onclick="mainMenu(true)">Main menu</button>
      <h1>Score</h1>
    </div>
    `;

    document.getElementById('score-column').innerHTML = scoreColumnTitle;

    let mobileButtons = `
    <div id="mobile-buttons" class="d-flex flex-row d-lg-none">
      <button onclick="mainMenu(true)">Main menu</button>
      <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">Score</button>
    </div>
    `;

    document.getElementById('position-zero').innerHTML = mobileButtons;

  } else {

    let rowThree = document.getElementById("position-three");
    rowThree.innerHTML = "";
    rowThree.removeAttribute('class');
    rowThree.setAttribute('class', 'row position-three-game');

    let rowOne = document.getElementById("position-one");
    rowOne.innerHTML = "";

    var milliseconds = 0;
    var seconds = 0;
    var minutes = 0;
    console.log("the timer has been reset: " + milliseconds + "." + seconds + "." + minutes);
  }

  grid = generateGrid(true);
  document.getElementById('position-two').innerHTML = grid;

  createPatternArray();
  setTimer();
}

function convertArrayToPattern(array) {
  for (let i in array) {
    var setColor = document.getElementById(i);
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

function createPatternArray() {
  //create array of between 9 and 16 (depending on grid size) which consists of random numbers between 0 and the colourPalette variable (4, 5 or 6)
  var newPatternArray = [];
  for (let i = 0; i < (gridSize * gridSize); i++) {
    let number = Math.floor(Math.random() * colourPalette);
    newPatternArray.push(number);
  }
  console.log("computer pattern array: " + newPatternArray);
  computerPattern = newPatternArray;

  convertArrayToPattern(computerPattern)
}

function setTimer() {
  if (viewTimerSelected === 0) {
    let goButton = `
      <button class="gameOptionsButton" id="go-button" onclick="generatePlayerGrid()">Go!</button>
      `;
    document.getElementById('position-one').innerHTML = goButton;
  } else {
    viewTimer()
  }
}

// timer code adapted from 'Code with Ania Kubów' Youtube channel video: "Build your own COUNTDOWN TIMER in 15 lines of JavaScript code" (https://www.youtube.com/watch?v=vSV_Ml2_A88&t=19s)
// with help from Bim who informed me that set interval should be declared as a variable
function viewTimer() {
  let timerDisplay = document.getElementById("position-one");
  let currentTimer = document.createElement("h2");
  currentTimer.setAttribute('id', 'current-timer');
  timerDisplay.appendChild(currentTimer);

  let timeLeft = viewTimerSelected;
  let patternDisplayTimer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(patternDisplayTimer);
      console.log("timer complete");
      generatePlayerGrid()
    }
    currentTimer.innerHTML = timeLeft;
    timeLeft -= 1;
    console.log("the time left is: " + timeLeft);
  }, 1000);
}

function generatePlayerGrid() {
  console.log("The player grid size is: " + gridSize);

  document.getElementById('position-one').innerHTML = "";

  grid = generateGrid(false);
  document.getElementById('position-two').innerHTML = grid;

  generatePalette();
  playerTimer();
}

//https://www.youtube.com/watch?v=oY8V6GuZrkM 
function playerTimer() {
  Timer = setInterval(run, 10); // 10 so that the function is called 100 times a second.
}

function run() {
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

function generatePalette() {
  console.log("The player colour number chosen is:" + colourPalette)
  let colourArray = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']

  let palette = `
        <div id="palette-area">
    `;
  for (let i = 0; i < (colourPalette); i++) {
    let insertColour = `
        <div class="color-selector" id="${colourArray[i]}" onclick="pickColour('${colourArray[i]}')"></div>
        `;
    palette += insertColour;
  }
  palette += `
        </div>
    `;
  document.getElementById('position-three').innerHTML = palette;
  generateSubmitButton();
}

function generateSubmitButton() {
  console.log("generating submit button");
  let submitButton = `
    <button id="submit-button" onclick="checkCompletion()">Submit</button>`;
  document.getElementById('position-four').innerHTML = submitButton;
}

function pickColour(colourChosen) {
  console.log(colourChosen);
  userColourSelected = colourChosen;
  console.log(userColourSelected);
}

function addColour(identifier, colourChosen) {
  console.log(userColourSelected);
  let selectedSquare = document.getElementById('square' + identifier);
  if (userColourSelected) {
    selectedSquare.style.backgroundColor = userColourSelected;
  } else {
    alert("you need to select a colour");
  }
}

function userPatternArray() {
  var gridOfSquares = document.getElementsByClassName('squares');
  squareCount = gridOfSquares.length;
  console.log("The square count is " + squareCount);
  userPattern = [];
  for (let i = 0; i < squareCount; i++) {
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

function patternComparePlayer() {
  let switchButton = `
    <h2>Click button to compare patterns</h2>
    <button class="gameOptionsButton" id="switch-button" onclick="patternCompareComputer()">Switch</button>
    `;
  document.getElementById('position-one').innerHTML = switchButton;

  grid = generateGrid(true);
  document.getElementById('position-two').innerHTML = grid;

  convertArrayToPattern(userPattern);
}

function patternCompareComputer() {
  let switchButton = `
    <h2>Click button to compare patterns</h2>
    <button class="gameOptionsButton" id="switch-button" onclick="patternComparePlayer()">switch</button>
    `;
  document.getElementById('position-one').innerHTML = switchButton;

  grid = generateGrid(true);
  document.getElementById('position-two').innerHTML = grid;

  convertArrayToPattern(computerPattern);
}

function checkCompletion() {
  userPatternArray()

  if (userPattern.length < (gridSize * gridSize)) {
    alert("please fill in all squares");
  } else {
    patternComparePlayer()
    gameStatus()
  }
}

function gameStatus() {
  console.log("gameStatus function " + userPattern);
  gameRound += 1;
  console.log("the current round is " + gameRound);
  console.log('the user pattern is: ' + userPattern);
  console.log('the AI pattern is: ' + computerPattern);
  let score = 0;
  let result;

  let submitButton = document.getElementById('submit-button');
  submitButton.remove();

  clearInterval(Timer) //-----------------------------------------------------------------------------------------------------
  console.log("You took " + minutes + " minutes");
  console.log("You took " + seconds + " seconds");
  console.log("You took " + milliseconds + " miliseconds");


  for (i = 0; i < computerPattern.length; i++) {
    if (userPattern[i] === computerPattern[i]) {
      score += 1;
    }
  }

  console.log("the result is " + score);

  if (score === userPattern.length) {
    result = "Win";
    console.log("you win");
    console.log("You got 100% right!");
    totalScore += 1;
    console.log("your total score is " + totalScore);
  } else {
    result = "Loss";
    console.log("you loose");
    console.log("You got " + ((score / userPattern.length) * 100) + "% right");
    console.log("your total score is " + totalScore);
  }

  //Adds result of the round to the score column
  let displayResultsColumn = document.getElementById("score-column");

  let columnRoundScoreBox = document.createElement("div");
  columnRoundScoreBox.setAttribute('class', 'round-score-box')

  let columnNewScore = document.createElement("h3");
  columnNewScore.setAttribute('class', 'result-entry');
  columnNewScore.innerHTML = result;

  let columnPlayerTime = document.createElement("h2");
  columnPlayerTime.setAttribute('class', 'result-entry');
  columnPlayerTime.innerHTML = seconds + ":" + milliseconds;

  columnRoundScoreBox.appendChild(columnNewScore);
  columnRoundScoreBox.appendChild(columnPlayerTime);

  displayResultsColumn.appendChild(columnRoundScoreBox);

  //Adds result of the round to the score modal
  let displayResultsModal = document.getElementById("score-modal");

  let modalRoundScoreBox = document.createElement("div");
  modalRoundScoreBox.setAttribute('class', 'round-score-box')

  let modalNewScore = document.createElement("h3");
  modalNewScore.setAttribute('class', 'result-entry');
  modalNewScore.innerHTML = result;

  let modalPlayerTime = document.createElement("h2");
  modalPlayerTime.setAttribute('class', 'result-entry');
  modalPlayerTime.innerHTML = seconds + ":" + milliseconds;

  modalRoundScoreBox.appendChild(modalNewScore);
  modalRoundScoreBox.appendChild(modalPlayerTime);

  displayResultsModal.appendChild(modalRoundScoreBox);

  //Opens up the end of round message box for player to trigger next round or to notify end of current game.

  document.getElementById('position-three').innerHTML = "";

  if (gameRound < 6) {
    let message = `
        <div id="messages-box">
            <h2>You got a ${result}</h2>
            <h2>Your time: ${seconds}.${milliseconds}</h2>
            <h3>Ready for round ${gameRound}?</h3>
            <button onclick="generateComputerGrid(0)">Next Round</button>
        </div>
        `;

    let rowThree = document.getElementById("position-three");
    rowThree.removeAttribute('class');
    rowThree.setAttribute('class', 'row position-three-message');

    document.getElementById('position-three').innerHTML = message;

  } else {
    console.log("end of game");
    if (totalScore === 5) {
      let message = `
            <div id="messages-box">
                <h2>You got top marks!</h2>
                <button onclick="playAgain()">Play again?</button>
                <button onclick="mainMenu(false)">Main menu"</button>
            </div>
            `;
      let rowThree = document.getElementById("position-three");
      rowThree.removeAttribute('class');
      rowThree.setAttribute('class', 'row position-three-message');

      document.getElementById('position-three').innerHTML = message;

    } else {
      console.log("end of game");
      let message = `
            <div id="messages-box">
                <h2>You scored ${totalScore}</h2>
                <button onclick="playAgain()">Play again?</button>
                <button onclick="mainMenu(true)">Main menu</button>
            </div>
            `;
      let rowThree = document.getElementById("position-three");
      rowThree.removeAttribute('class');
      rowThree.setAttribute('class', 'row position-three-message');

      document.getElementById('position-three').innerHTML = message;
    }
  }
}

function playAgain() {
  let scoreColumn = document.getElementById("score-column");
  scoreColumn.remove();

  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  gameRound = 1;

  generateComputerGrid(1);
}