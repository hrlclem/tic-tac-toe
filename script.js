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


const playerMove = (() => {
      const square = document.querySelectorAll('.square');
      square.forEach ( square => {
            square.addEventListener("click", e => {
                  if(gameStatus.winner == null) {
                        // For player 1 move
                        if (  player1.turn == true && 
                              gameStatus.winner == null && 
                              e.target.textContent == "" ) {
                                    // Update board Array
                                    gameStatus.boardArray1.push(Number(e.target.id));
                                    // Change DOM
                                    e.target.textContent = player1.marker;
                                    // // Adds turn++;
                                    gameStatus.turns++;
                                    // Check for winning move
                                    checkForWin(winPossibilities, gameStatus.boardArray1);
                                    // // Change player's turn
                                    player1.turn = false;
                                    player2.turn = true;
                                    playersTurn();
                                    // If Player vs Bot
                                    isBotPlaying();
                        }
                        // For player 2 move
                        else if (player2.turn == true && 
                              gameStatus.winner == null && 
                              e.target.textContent == "" &&
                              player2.bot == false) {
                                    // Update board Array
                                    gameStatus.boardArray2.push(Number(e.target.id));
                                    // Change DOM
                                    e.target.textContent = player2.marker;
                                    // // Adds turn++;
                                    gameStatus.turns++;
                                    // Check for winning move
                                    checkForWin(winPossibilities, gameStatus.boardArray2);  
                                    // // Change player's turn
                                    player1.turn = true;
                                    player2.turn = false;
                                    playersTurn();
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



function isBotPlaying() {
      if (  player2.bot == true &&
            player2.turn == true && 
            gameStatus.winner == null) 
            {
                  botNextMove(gameStatus.boardArray1, gameStatus.boardArray2);
            }

      return;
};

function botNextMove(boardArray1, boardArray2){

      setTimeout(() => {
            let emptyBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            let buffer1 = boardArray1;
            let buffer2 = boardArray2;
            let fullBoardArray = buffer1.concat(buffer2);
      
            // Search for all possible choices
            let possibleChoices = emptyBoard.filter(choices => !fullBoardArray.includes(choices));
      
            // Select a random square from all possible choices
            let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
      
            // Update board Array
            gameStatus.boardArray2.push(randomChoice);
            // Change DOM
            document.getElementById(randomChoice).textContent = player2.marker;
            // Adds turn++;
            gameStatus.turns++;
            // Check for winning move
            checkForWin(winPossibilities, gameStatus.boardArray2);   
            // Change player's turn
            player1.turn = true;
            player2.turn = false;
            playersTurn();
          }, 
          "500")

}



function checkForWin(winArray, playBoardArray) {
      let buffer = [];

      for (i = 0; i < winArray.length; i++) {
            for (k = 0; k < winArray[i].length; k++) {
                  for (j = 0; j < playBoardArray.length; j++) {
                        if (playBoardArray[j] == winArray[i][k]) {
                              buffer.push(playBoardArray[j]);
                              console.log(gameStatus.turns + " " + buffer.length);
                              console.log(gameStatus.turns + " " + gameStatus.winner);
                              // Player 1 wins
                              if(buffer.length == 3 && player1.turn == true)
                              {
                                    gameStatus.winner = "player1";
                                    displayWinner();
                                    return gameStatus.winner;
                              } 
                              // Player 2 wins
                              else if (buffer.length == 3 && player2.turn == true)
                              {  
                                    gameStatus.winner = "player2";
                                    displayWinner();
                                    return gameStatus.winner;
                              }
                              // It's a tie
                              else if (buffer.length != 3 && gameStatus.winner == null && gameStatus.turns == 9)
                              {  
                                    gameStatus.winner = "tie";
                                    displayWinner();
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
const header = document.querySelector('.header');
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
const player1Turn = document.querySelector('.player1Turn');
const player2Turn = document.querySelector('.player2Turn');
const boardGame = document.querySelector('.boardGame');
const p1Winner = document.querySelector('.player1Winner');
const p2Winner = document.querySelector('.player2Winner');
const tieWinner = document.querySelector('.tieWinner');



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
      player2.bot = false;

};

function PVBotMod() {
      player2.bot = true;
      gamemodeSelectMod.style.display = 'none';
      markerSelectMod.style.display = 'block';
};

function xMarkerSelected() {
      markerSelectMod.style.display = 'none';
      gameModal.style.display = 'block';
      header.style.display = 'block';
      player1.marker = 'X';
      player2.marker = 'O';
      // Launch game
};

function oMarkerSelected() {
      markerSelectMod.style.display = 'none';
      gameModal.style.display = 'block';
      header.style.display = 'block';
      player1.marker = 'O';
      player2.marker = 'X';
      // Launch game
};

function playersTurn() {
      if (gameStatus.winner != null) 
      {
            player1Turn.style.display = 'none';
            player2Turn.style.display = 'none';
            boardGame.style.display = 'none';    
      }
      else {
            if (player1.turn == true) 
            {
                  player1Turn.style.display = 'flex';
                  player2Turn.style.display = 'none';
      
            }
            else if (player2.turn = true) 
            {
                  player1Turn.style.display = 'none';
                  player2Turn.style.display = 'flex';
            }
      }
};


function displayWinner() {
      boardGame.style.display = 'none';  
      player1Turn.style.display = 'none';
      player2Turn.style.display = 'none';

      if (gameStatus.winner == 'player1') 
      {
            p1Winner.style.display = 'flex';
      }      
      else if (gameStatus.winner == 'player2') 
      {
            p2Winner.style.display = 'flex';  
      }
      else if (gameStatus.winner == 'tie') 
      {
            tieWinner.style.display = 'flex';  
      }
};


function restartMod() {
      if ( player2.bot == false) 
      {
            // reset player 1
            player1.name = 'player1';
            player1.maker = 'X';
            player1.bot = false;
            player1.turn = true;

            // reset player 2
            player2.name = 'player2';
            player2.maker = 'O';
            player2.bot = false;
            player2.turn = false
      }
      // In case of rematch
      gameModal.style.display = 'block';
      header.style.display = 'block';
      boardGame.style.display = 'block';
      p1Winner.style.display = 'none';   
      p2Winner.style.display = 'none';   
      tieWinner.style.display = 'none'; 

      // In case during current game
      const square = document.querySelectorAll('.square');
      square.forEach(sq => {
            sq.textContent = "";
          });

      // reset player 1
      player1.name = 'player1';
      player1.maker = 'X';
      player1.bot = false;
      player1.turn = true;

      // reset player 2
      player2.name = 'player2';
      player2.maker = 'O';
      player2.bot = true;
      player2.turn = false

      // reset game info
      gameStatus.turns = 0;
      gameStatus.boardArray1 = [];
      gameStatus.boardArray2 = [];
      gameStatus.winner = null;
      
      playersTurn();  
};

})();





// PENDING FEATURES
// gameplaySelectionMod();  // User choose between 1VBot or 1V1
// markerSelectionMod()     // Player 1 choose a sign between X and 0;