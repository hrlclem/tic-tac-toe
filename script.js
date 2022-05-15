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
let tie;

const playerMove = (() => {
      const square = document.querySelectorAll('.square');
      square.forEach ( square => {
            square.addEventListener("click", e => {
                  // For player 1 move
                  if (  player1.turn == true && 
                        gameStatus.winner == null && 
                        e.target.textContent == "" ) {
                              // Update board Array
                              gameStatus.boardArray1.push(Number(e.target.id));
                              // Check for winning move
                              checkForWin(winPossibilities, gameStatus.boardArray1);
                              // Change DOM
                              e.target.textContent = player1.marker;
                              // // Change player's turn
                              player1.turn = false;
                              player2.turn = true;
                              // // Adds turn++;
                              gameStatus.turns++;
                  }
                  // For player 2 move
                  else if (player2.turn == true && 
                        gameStatus.winner == null && 
                        e.target.textContent == "" ) {
                              // Update board Array
                              gameStatus.boardArray2.push(Number(e.target.id));
                              // Check for winning move
                              checkForWin(winPossibilities, gameStatus.boardArray2);
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
                     return;
                  }
            });
      });
      return;
})();


// Playgame function

// gameStarts();            // Set up the game
// gameMoveMod();           // Player select a square, actions occur (render, taken spots, updategameboard display, result...)
// botMoveMod();            // It's bot's turn: bot choose a square
// updateGameboardMod();    // Update and display choice on gameboard
// renderMod();             // Roles the play
// resultMod();             // Check current play and compare to winPossibilities, 
//                               // gives result (player win or tie), popup appears and offer to restart
// restartMod();            // Restart the game



function checkForWin(winArray, playBoardArray) {
      let buffer = [];

      for (i = 0; i < winArray.length; i++) {
            for (k = 0; k < winArray[i].length; k++) {
                  for (j = 0; j < playBoardArray.length; j++) {
                        if (playBoardArray[j] == winArray[i][k]) {
                              buffer.push(playBoardArray[j]);
                              if(buffer.length == 3 && player1.turn == true)
                              {
                                    console.log('Player 1 win');
                                    gameStatus.winner == player1;
                                    return;
                              } 
                              else if (buffer.length == 3 && player2.turn == true)
                              {  
                                    console.log('Player 2 win'); 
                                    gameStatus.winner == player2;
                                    return;
                              }
                              else if (buffer.length != 3 && 
                                    gameStatus.winner == null && 
                                    gameStatus.turns == 8)
                              {  
                                    console.log("It's a tie");
                                    gameStatus.winner == tie;
                                    return;
                              }

                        }
                  }

            }
            buffer = [];
      }
      return;
};

//     const playBtn = document.getElementById('play-btn');
//     playBtn.addEventListener('click', gamePlay);


      const restartBtn = document.getElementsByClassName('.restartBtn')
      restartBtn.addEventListener("click", restartMod);

function restartMod() {
      const square = document.querySelectorAll('.square');
      square.forEach(sq => {
            sq.textContent = "";
          });

      // reset player 1
      player1.name = 'player1';
      player1.maker = 'X';
      player1.bot = false;
      player1.turn = true;

      // reset player 1
      player2.name = 'player2';
      player2.maker = '0';
      player2.bot = false;
      player2.turn = false

      // reset game info
      gameStatus.turns = 0;
      gameStatus.boardArray1 = [];
      gameStatus.boardArray2 = [];
      gameStatus.winner = null;
};

})();








// PENDING FEATURES
// gameplaySelectionMod();  // User choose between 1VBot or 1V1
// markerSelectionMod()     // Player 1 choose a sign between X and 0;
// currentPlayerMod();      // Checks which player is playing now (Player 1 or Player 2, Player 1 or Bot)