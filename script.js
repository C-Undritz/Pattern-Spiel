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
    <button class="gameOptionsButton" id="5" onclick="colourNumberSelection(5)">5 x 5 grid</button>
    `;
    document.getElementById('game-options').innerHTML = optionButtons;
}

playButton.addEventListener('click', gridSizeSelection);

function colourNumberSelection(gridSelection) {
    console.log("connected2");
    gridSize = gridSelection;
    let optionButtons = `
    <button class="gameOptionsButton" id="4" onclick="viewTimerSelection(4)">4 colours</button>
    <button class="gameOptionsButton" id="5" onclick="viewTimerSelection(5)">5 colours</button>
    <button class="gameOptionsButton" id="6" onclick="viewTimerSelection(6)">6 colours</button>
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
    <button class="gameOptionsButton" id="0" onclick="">Play Game!</button>
    `;
    document.getElementById('game-options').innerHTML = optionButtons;
}