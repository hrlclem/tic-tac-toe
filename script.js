let boardArray = [];




//Make player constructor for player object or FACTORY
const player = () => {
      return{
            player : 1, 
            signMarker : "X",
      }
};




const xMarkerBtn = document.getElementsByClassName("xMarker");
const oMarkerBtn = document.getElementsByClassName("oMarker");
let playerMarker;

xMarkerBtn.addEventListener("click",console.log(34));

gameplaySelectionMod();  // User choose between 1VBot or 1V1
markerSelectionMod()     // Player 1 choose a sign between X and 0;

// Modules 1VBot
currentPlayerMod();      // Checks which player is playing now (Player 1 or Player 2, Player 1 or Bot)
gameMoveMod();           // Player select a square, actions occur (render, taken spots, updategameboard display, result...)
takenSpotsCheckMod();    // Check if player selection is really empty or already taken (+ list of all taken + list of all available)
botMoveMod();            // It's bot's turn: bot choose a square
updateGameboardMod();    // Update and display choice on gameboard
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