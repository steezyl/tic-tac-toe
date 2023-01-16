// Factory Function
const Player = (number, symbol) => {
    this.number = number;
    this.symbol = symbol;
    // playTurn = function() {
    //     gridElements = document.querySelectorAll('.grid-element');
    //     gridElements.forEach(grid => grid.addEventListener('click', () => {
    //         gridNumber = Number(this.id)-1;
    //         gameBoard.gameArray[gridNumber] = `${symbol}`;
    //         this.textContent = `${symbol}`;
    //     }))
    // }
    const switchPlayer = () => {
        currentPlayer = this.number === 1 ? 2 : 1;
        if (currentPlayer == 1) {
            
        }
        return currentPlayer;
      }
      return {switchPlayer};
  }

// Gameboard Module
const gameBoard = (() => {
    const gameArray = new Array(9).fill(null);
    return {
        gameArray
    };
  })();

// Gameflow Module
const gameFlow = (() => {
    gameOverPara = document.querySelector('.game-over');
    resetButton = document.querySelector('.reset-button');
    resetButton.style.visibility = "hidden";
    
    const playerX = Player(1, 'X');
    const playerO = Player(2, 'O');
    const currentPlayer = () => {
        
    }

    playTurn = function(currentPlayer) {
        gridElements = document.querySelectorAll('.grid-element');
        gridElements.forEach(grid => grid.addEventListener('click', () => {
            gridNumber = Number(this.id)-1;
            gameBoard.gameArray[gridNumber] = `${symbol}`;
            this.textContent = `${symbol}`;
        }))
    }
    const checkGame = () => {
        if (G[0] == G[1] && G[2] == G[1] && G[1] != 'null'|| G[3] == G[4] && G[4] == G[5] && G[5] != 'null'|| 
            G[6] == G[7] && G[7] == G[8] && G[8] != 'null'|| G[0] == G[3] && G[3] == G[6] && G[6] != 'null'||
            G[1] == G[4] && G[4] == G[7] && G[7] != 'null'|| G[2] == G[5] && G[5] == G[8] && G[8] != 'null'||
            G[0] == G[4] && G[4] == G[8] && G[8] != 'null'|| G[2] == G[4] && G[4] == G[6] && G[6] != 'null') {
                
                gameOverPara.textContent = 'Game Over!';
                resetButton.style.visibility = "visible";
                resetButton.addEventListener('click', resetGame);
                gameResult = 1;
         }
        else {
            gameResult = 0;
         }
        return gameResult;
    }
    const resetGame = () => {
            resetButton.style.visibility = "hidden";
            gameOverPara.textContent = '';
            gameboard();
    }
    return {
    };
  })();

// Lets play
// const playerX = Player(1, 'X');
// const playerO = Player(2, 'O');

Player.playTurn


// gridElements = document.querySelectorAll('.grid-element');
// gridElements.forEach(grid => grid.addEventListener('click', gameFlow));