let boardArray = [];


//Make player constructor for player object
let player = {
      name: "",
      selectedSign : "",
      playerPlays : []
}

// Modules
signSelectionModule();      // Choose a sign between X and 0;
gameplayModule();           // Player select a square, actions occur (render, result...)
currentPlayerModule();      // Checks which player is playing now


renderModule();             // Roles the play
resultModule();             // Check current play and compare to winPossibilities
restartModule();            // Restart the game






let winPossibilities = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];