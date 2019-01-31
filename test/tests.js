/* eslint-disable */
const mocha = require('mocha');
const chai = require('chai');
const GameEngine = require('../GameEngine');
const should = chai.should();

const {
  snakes, ladders, playersCount, playerMoves
} = require('../sampleInputs');
const game = new GameEngine({
  ladders, snakes, playersCount
});

describe('Snakes and Ladders Testing', () => {
  it('Initial positions of players is zero', (done) => {
    const playerPositions = game.players;
    playerPositions[1].currentCell.should.eql(0);
    playerPositions[2].currentCell.should.eql(0);
    done();
  })
  
  it('Players have correct positions after sample moves', (done) => {
    game.play(playerMoves);
    const playerPositions = game.players;
    playerPositions[1].currentCell.should.eql(60);
    playerPositions[2].currentCell.should.eql(14);
    done();
    game.reset();
  });

  it('Player ends up at 7 if moves 1 step 1000 times', (done) => {
    for (let i = 0; i < 1000; i++) {
      game.movePlayer(1, 1);
    }
    game.players[1].currentCell.should.eql(7);
    done();
  })
});
