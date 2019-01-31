const GameEngine = require('./GameEngine');
const {
  snakes, ladders, playersCount, playerMoves
} = require('./sampleInputs');

const game = new GameEngine({
  ladders, snakes, playersCount
});

game.play(playerMoves);

game.showPositions();
