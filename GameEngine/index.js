const Board = require('./GameBoard');

class SnakesAndLadders {
  constructor(params) {
    this.initialiseBoard(params);
    this.initialisePlayers(params);
  }

  initialiseBoard({ size, ladders, snakes }) {
    this.GameBoard = new Board({ size, ladders, snakes });
  }

  initialisePlayers({ playersCount }) {
    this.players = {};
    for (let i = 1; i <= playersCount; i += 1) {
      this.players[i] = {
        currentCell: 0
      };
    }
  }

  movePlayer(player, steps) {
    const newCell = this.players[player].currentCell + steps;

    if (newCell > this.GameBoard.size) {
      // Player must not move beyond the limit of board
      return;
    }

    if (this.GameBoard.Board.edges[newCell][0].weight === -1) {
      // If the newCell has a snake/ladder, move to where it leads
      this.players[player].currentCell = this.GameBoard.Board.edges[newCell][0].node;
    } else {
      this.players[player].currentCell = newCell;
    }
  }

  showPositions() {
    let positions = '';
    Object.keys(this.players).forEach((player) => {
      positions += `Player ${player} - ${this.players[player].currentCell}\n`;
    });
    console.log(positions);
  }

  play(playerMoves) {
    Object.keys(playerMoves).forEach((player) => {
      playerMoves[player].forEach((step) => {
        this.movePlayer(player, step);
      });
    });
  }

  reset() {
    // Restore initial positions of the players
    Object.keys(this.players).forEach((player) => {
      this.players[player].currentCell = 0;
    });
  }
}

module.exports = SnakesAndLadders;
