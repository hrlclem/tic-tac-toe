let boardArray = [];


//Make player constructor for player object or FACTORY
const player = (sign) => {
      return{
            signMarker : sign,
      }
};

let playerSign = player("X");

console.log(player("X"));

// Modules
const markerSelectionMod = (() => {
      let playerMarker;
      const xMarkerBtn = document.getElementsByClassName("xMarker");
      const oMarkerBtn = document.getElementsByClassName("oMarker");
      xMarkerBtn.onclick = function(){
            playerMarker = "x";
      }
      oMarkerBtn.onclick = function(){
            playerMarker = "o";
      }
      console.log(playerMarker)
      return playerMarker;
})();    // Choose a sign between X and 0;

// gameplayMod();           // Player select a square, actions occur (render, result...)
// updateGameboardMod();    // Update and display choice on gameboard
// currentPlayerMod();      // Checks which player is playing now
// takenSpotsCheckMod();    // Check if player selection is really empty or already taken
// renderMod();             // Roles the play
// resultMod();             // Check current play and compare to winPossibilities, 
//                               // gives result (player win or tie), popup appears and offer to restart
// restartMod();            // Restart the game


// console.log(playerMarker + 33)



let winPossibilities = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];