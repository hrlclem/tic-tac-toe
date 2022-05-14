const gameBoard = (() => {

// Create player
const playerCreation = (name, marker, bot, turn) => {
      return{ 
            name, 
            marker, 
            bot, 
            turn}
};

const gameStatus = (() => {
      let turns = 0;
      let boardArray = [];
      let winner = null;
      return{
            turns, 
            boardArray, 
            winner
      };
})();

// Possible wins
let winPossibilities = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];

// Create player for regular game
const player1 = playerCreation('player1', 'X', false, true);
const player2 = playerCreation('player2', '0', false, false);


const playerMove = (() => {
      const square = document.querySelectorAll('.square');
      square.forEach
})();


// gameStarts();            // Set up the game
// gameMoveMod();           // Player select a square, actions occur (render, taken spots, updategameboard display, result...)
// takenSpotsCheckMod();    // Check if player selection is really empty or already taken (+ list of all taken + list of all available)
// botMoveMod();            // It's bot's turn: bot choose a square
// updateGameboardMod();    // Update and display choice on gameboard
// renderMod();             // Roles the play
// resultMod();             // Check current play and compare to winPossibilities, 
//                               // gives result (player win or tie), popup appears and offer to restart
// restartMod();            // Restart the game


})();




// PENDING FEATURES
// gameplaySelectionMod();  // User choose between 1VBot or 1V1
// markerSelectionMod()     // Player 1 choose a sign between X and 0;
// currentPlayerMod();      // Checks which player is playing now (Player 1 or Player 2, Player 1 or Bot)





// // Game setup
// let boardArray = [];
// let winner = null;

