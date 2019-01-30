const Graph = require('../utils/graph');

class GameBoard {
  constructor(size) {
    this.size = size;
    this.Board = new Graph();
    this.addCells();
    this.addSnakes();
    this.addLadders();
    this.addSteps();
  }

  addCells() {
    for (let i = 1; i <= this.size; i += 1) {
      this.Board.addNode(i);
    }
  }

  addSnakes() {
    const snakes = [
      [17, 7],
      [54, 34],
      [62, 18],
      [64, 60],
      [87, 24],
      [93, 73],
      [95, 75],
      [99, 78]
    ];
    snakes.forEach((snake) => {
      this.Board.addDirectedEdge(snake[0], snake[1], -1);
    });
  }

  addLadders() {
    const ladders = [
      [4, 14],
      [9, 31],
      [20, 38],
      [28, 84],
      [40, 59],
      [63, 81],
      [71, 91]
    ];
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
