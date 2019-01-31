const GameEngine = require('./GameEngine');

const {
  snakes, ladders, playersCount, playerMoves
} = require('./sampleInputs');

// Instantiate GameEngine with the configurations
const game = new GameEngine({
  ladders, snakes, playersCount
});

// Move the players as per the sequence of their respective moves
game.play(playerMoves);

// Display the postitions of players on the board after the moves
game.showPositions();
