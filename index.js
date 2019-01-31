const GameEngine = require('./GameEngine');
const {
  snakes, ladders, playersCount, playerMoves
} = require('./sampleInputs');

const game = new GameEngine({
  size: 100, ladders, snakes, playersCount
});

game.play(playerMoves);

game.showPositions();
