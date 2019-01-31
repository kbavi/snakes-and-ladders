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
    for (let currentCell = 1; currentCell <= this.size; currentCell += 1) {
      for (let step = 1; step <= 6; step += 1) {
        const newCell = currentCell + step;
        const newCellInLimits = (newCell <= this.size);
        if (newCellInLimits && !this.hasLadderOrSnake(currentCell)) {
          this.Board.addDirectedEdge(currentCell, newCell, step);
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
