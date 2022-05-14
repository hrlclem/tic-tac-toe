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
      let boardArray1 = [];
      let boardArray2 = [];
      let winner = null;
      return{
            turns, 
            boardArray1, 
            boardArray2, 
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
      square.forEach ( square => {
            square.addEventListener("click", e => {
                  // For player 1 move
                  if (        player1.turn == true && 
                              gameStatus.winner == null && 
                              e.target.textContent == "" ) {
                                    // Update board Array
                                    gameStatus.boardArray1.push(Number(e.target.id));
                                    // Check for winning move
                                    checkForWin(winPossibilities, gameStatus.boardArray1);
                                    if (gameStatus.winner == true) {console.log('Player 1 : you win');}
                                    // Change DOM
                                    e.target.textContent = player1.marker;
                                    // // Change player's turn
                                    player1.turn = false;
                                    player2.turn = true;
                                    // // Adds turn++;
                                    gameStatus.turns++;
                  }
                  // For player 2 move
                  else if (   player2.turn == true && 
                              gameStatus.winner == null && 
                              e.target.textContent == "" ) {
                                    // Update board Array
                                    gameStatus.boardArray2.push(Number(e.target.id));
                                    // Check for winning move
                                    checkForWin(winPossibilities, gameStatus.boardArray2);
                                    if (gameStatus.winner == true) {console.log('Player 2 : you win');}
                                    // Change DOM
                                    e.target.textContent = player2.marker;
                                    // // Change player's turn
                                    player1.turn = true;
                                    player2.turn = false;
                                    // // Adds turn++;
                                    gameStatus.turns++;
                  }
                  else 
                  {
                     return
                   }
            });
      });
})();



function checkForWin(winArray, playBoardArray) {

      let buffer = [];

      for (i = 0; i < winArray.length; i++) {
            for (k = 0; k < winArray[i].length; k++) {
                  for (j = 0; j < playBoardArray.length; j++) {
                        if (playBoardArray[j] == winArray[i][k]) {
                              buffer.push(playBoardArray[j]);
                              if(buffer.length == 3){
                                    gameStatus.winner == true;
                                    return ;
                              }
                              k++;
                        }
                  }

            }
            buffer = [];
      }
};



// gameStarts();            // Set up the game
// gameMoveMod();           // Player select a square, actions occur (render, taken spots, updategameboard display, result...)
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

