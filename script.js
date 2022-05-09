let boardArray = [];


//Make player constructor for player object or FACTORY
let player = {
      name: "",
      marker : "",
      playerPlays : []
}

// Modules
markerSelectionModule();    // Choose a sign between X and 0;
gameplayModule();           // Player select a square, actions occur (render, result...)
gameboardUpdateModule();    // Update and display choice on gameboard
currentPlayerModule();      // Checks which player is playing now
takenSpotsCheckModule();    // Check if player selection is really empty or already taken


renderModule();             // Roles the play
resultModule();             // Check current play and compare to winPossibilities, 
                              // gives result (player win or tie), popup appears and offer to restart
restartModule();            // Restart the game






let winPossibilities = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];