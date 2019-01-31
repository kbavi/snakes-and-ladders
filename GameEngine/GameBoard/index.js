const Graph = require('./utils/graph');

class GameBoard {
  constructor(params) {
    this.size = params.size || 100;
    this.Board = new Graph();
    this.addCells();
    this.addSnakes(params.snakes);
    this.addLadders(params.ladders);
    this.addSteps();
  }

  addCells() {
    for (let i = 1; i <= this.size; i += 1) {
      this.Board.addNode(i);
    }
  }

  addSnakes(snakes) {
    snakes.forEach((snake) => {
      this.Board.addDirectedEdge(snake[0], snake[1], -1);
    });
  }

  addLadders(ladders) {
    ladders.forEach((ladder) => {
      this.Board.addDirectedEdge(ladder[0], ladder[1], -1);
    });
  }

  addSteps() {
    for (let i = 1; i <= this.size; i += 1) {
      for (let k = 1; k <= 6; k += 1) {
        if ((i + k) <= this.size && !this.hasLadderOrSnake(i)) {
          this.Board.addDirectedEdge(i, i + k, k);
        }
      }
    }
  }

  hasLadderOrSnake(cell) {
    return (
      this.Board.edges[cell].length > 0
      && this.Board.edges[cell][0].weight === -1
    );
  }

  toString() {
    this.Board.display();
  }
}

module.exports = GameBoard;
