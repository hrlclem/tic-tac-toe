let boardArray = [];


//Make player constructor for player object or FACTORY
const player = () => {
      let name = "";
      let market = "";
      let playerMoves = [];
};

// Modules
markerSelectionMod();    // Choose a sign between X and 0;
gameplayMod();           // Player select a square, actions occur (render, result...)
updateGameboardMod();    // Update and display choice on gameboard
currentPlayerMod();      // Checks which player is playing now
takenSpotsCheckMod();    // Check if player selection is really empty or already taken
renderMod();             // Roles the play
resultMod();             // Check current play and compare to winPossibilities, 
                              // gives result (player win or tie), popup appears and offer to restart
restartMod();            // Restart the game






let winPossibilities = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];