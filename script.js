const gameBoard = (() => {

// GAME PROCESSING
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
const player2 = playerCreation('player2', 'O', false, false);
let tie;

const playerMove = (() => {
      const square = document.querySelectorAll('.square');
      square.forEach ( square => {
            square.addEventListener("click", e => {
                  console.log(gameStatus.winner)
                  if(gameStatus.winner == null) {
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
                  }
            });
      });
      return;
})();

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
                                    return gameStatus.winner;
                              } 
                              else if (buffer.length == 3 && player2.turn == true)
                              {  
                                    console.log('Player 2 win'); 
                                    gameStatus.winner == player2;
                                    return gameStatus.winner;
                              }
                              else if (buffer.length != 3 && 
                                    gameStatus.winner == null && 
                                    gameStatus.turns == 8)
                              {  
                                    console.log("It's a tie");
                                    gameStatus.winner == tie;
                                    return gameStatus.winner;
                              }

                        }
                  }

            }
            buffer = [];
      }
      return;
};






// DISPLAY GAME

// Set up event listener
const startBtn = document.querySelector('.startBtn');
const restartBtn = document.querySelector('.restartBtn');
const startMod = document.querySelector('.startModal');
const gamemodeSelectMod = document.querySelector('.gamemodeSelectionModal');
const markerSelectMod = document.querySelector('.markerSelectionModal');
const gameModal = document.querySelector('.currentGameModal');
const PVPBtn = document.querySelector('.gamemode1V1Btn');
const PVBotBtn = document.querySelector('.gamemodeBotBtn');
const xMarkerBtn = document.querySelector('.xMarker');
const oMarkerBtn = document.querySelector('.oMarker');





startBtn.addEventListener("click", startGame);              // Start game
restartBtn.addEventListener("click", restartMod);           // Restart game

PVPBtn.addEventListener("click", PVPMod);                   // Play against friend
PVBotBtn.addEventListener("click", PVBotMod);               // Play against computer

xMarkerBtn.addEventListener("click", xMarkerSelected);      // Player1 selects X marker
oMarkerBtn.addEventListener("click", oMarkerSelected);      // Player1 selects O marker





// Display functions
function startGame() {
      startMod.style.display = 'none';
      gamemodeSelectMod.style.display = 'block';
};

function PVPMod() {
      gamemodeSelectMod.style.display = 'none';
      markerSelectMod.style.display = 'block';
      // Player info update
};

function PVBotMod() {
      gamemodeSelectMod.style.display = 'none';
      markerSelectMod.style.display = 'block';
      // Bot info update
};

function xMarkerSelected() {
      markerSelectMod.style.display = 'none';
      gameModal.style.display = 'block';
      // Player info update X
      // Launch game
};

function oMarkerSelected() {
      markerSelectMod.style.display = 'none';
      gameModal.style.display = 'block';
      // Player info update
      // Launch game
};










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
      player2.maker = 'O';
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