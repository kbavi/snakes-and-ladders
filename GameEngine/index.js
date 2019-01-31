const Board = require('../GameBoard');

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
      return;
    }
    if (this.GameBoard.Board.edges[newCell][0].weight === -1) {
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
}

module.exports = SnakesAndLadders;
