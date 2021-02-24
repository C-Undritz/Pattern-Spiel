let playButton = document.getElementById("play-game");
let gridSize;
let colourPalette;
let viewTimerSelected;
let playerTimerSelected;

function gridSizeSelection() {
    console.log("connected1");
    let optionButtons = `
    <button class="gameOptionsButton" id="3" onclick="colourNumberSelection(3)">3 x 3 grid</button>
    <button class="gameOptionsButton" id="4" onclick="colourNumberSelection(4)">4 x 4 grid</button>
    `;
    document.getElementById('game-options').innerHTML = optionButtons;
}

playButton.addEventListener('click', gridSizeSelection);

function colourNumberSelection(gridSelection) {
    console.log("connected2");
    gridSize = gridSelection;
    let optionButtons = `
    <button class="gameOptionsButton" id="4" onclick="viewTimerSelection(4)">Up to 4 colours</button>
    <button class="gameOptionsButton" id="5" onclick="viewTimerSelection(5)">Up to 5 colours</button>
    <button class="gameOptionsButton" id="6" onclick="viewTimerSelection(6)">Up to 6 colours</button>
    `;
    document.getElementById('game-options').innerHTML = optionButtons;
}

function viewTimerSelection(colourSelection) {
    colourPalette = colourSelection;
    let optionButtons = `
    <button class="gameOptionsButton" id="0" onclick="playerTimerSelection(0)">No Timer</button>
    <button class="gameOptionsButton" id="5" onclick="playerTimerSelection(5)">5 Seconds</button>
    <button class="gameOptionsButton" id="10" onclick="playerTimerSelection(10)">10 seconds</button>
    <button class="gameOptionsButton" id="15" onclick="playerTimerSelection(15)">15 seconds</button>
    `;
    document.getElementById('game-options').innerHTML = optionButtons;
}

function playerTimerSelection(viewTimerSelection) {
    viewTimerSelected = viewTimerSelection;
    let optionButtons = `
    <button class="gameOptionsButton" id="0" onclick="playGame(0)">No Timer</button>
    <button class="gameOptionsButton" id="10" onclick="playGame(10)">10 Seconds</button>
    <button class="gameOptionsButton" id="15" onclick="playGame(15)">15 seconds</button>
    <button class="gameOptionsButton" id="20" onclick="playGame(20)">20 seconds</button>
    `;
    document.getElementById('game-options').innerHTML = optionButtons;
}

function playGame(playerTimerSelection) {
    playerTimerSelected = playerTimerSelection;
    console.log(gridSize);
    console.log(colourPalette);
    console.log(viewTimerSelected);
    console.log(playerTimerSelected);
    let optionButtons = `
    <button class="gameOptionsButton" id="0" onclick="generateComputerGrid()">Play Game!</button>
    `;
    document.getElementById('game-options').innerHTML = optionButtons;
}

function generateComputerGrid() {
    console.log(gridSize);
    let grid = `
    <div class="container${gridSize}x${gridSize}">
    `;
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let rowGrid = `
            <div class="board${gridSize} squares" id="${i}" onclick="addColour(${i})"></div>
            `;
            grid += rowGrid;  
        }
    grid += `
        </div>
    `;
    document.getElementById('game-options').innerHTML = grid;
    addPattern();
    Timer();
}

function addPattern() {
    //create array of between 9 and 25 (depending on grid size) which consists of random numbers between 0 and the colourPalette variable (4, 5 or 6)
    var newPattern = [];
    for (let i = 0; i < (gridSize*gridSize); i++) {
        let number = Math.floor(Math.random() *colourPalette);
        newPattern.push(number);
    }
    console.log(newPattern);

    //using newPattern array to assign colours to the grid
    for (let i in newPattern) {
        var setColor = document.getElementById(i);
        if (newPattern[i] === 0) {
        setColor.style.backgroundColor = "red";
        }
        else if (newPattern[i] === 1) {
        setColor.style.backgroundColor = "green";
        }
        else if (newPattern[i] === 2) {
        setColor.style.backgroundColor = "blue";
        }
        else if (newPattern[i] === 3) {
        setColor.style.backgroundColor = "yellow";
        }
        else if (newPattern[i] === 4) {
        setColor.style.backgroundColor = "purple";
        }
        else {
        setColor.style.backgroundColor = "orange";
        }
    }
}

// timer code adapted from 'Code with Ania Kubów' Youtube channel video: "Build your own COUNTDOWN TIMER in 15 lines of JavaScript code" (https://www.youtube.com/watch?v=vSV_Ml2_A88&t=19s)
function Timer() {
    let timeLeftDisplay = document.getElementById("time-left");
    let timeLeft = viewTimerSelected;
    setInterval(function() {
        if(timeLeft <= 0 ) {
            generatePlayerGrid()
            clearInterval(timeLeft = "");
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }, 1000)
}

function generatePlayerGrid() {
    //console.log(gridSize); !!!?!!?!?!?!??!!!!?!??!!!?
    //numberOfSquares = this.id;
    //console.log(numberOfSquares);
    let grid = `
    <div class="container${gridSize}x${gridSize}">
    `;
    for (let i = 0; i < (gridSize*gridSize); i++) {
    let rowGrid = `
        <div class="board${gridSize}" id="square${i}" onclick="addColour(${i})"></div>
        `;
        grid += rowGrid;  
    }
    grid += `
        </div>
    `;
    document.getElementById('game-options').innerHTML = grid;
}



