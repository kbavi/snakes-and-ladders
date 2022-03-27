# Snakes and Ladders

Welcome to the JavaScript implementation of the [Snakes and Ladders](https://en.wikipedia.org/wiki/Snakes_and_ladders) board game.

**Design**
-  A directed graph is used to represent the game board.
- The board has (by default) 100 cells (10 X 10).
- Each cell in the board is linked to the next 6 cells (if they exist).
- If a cell has a snake/ladder, it only has a single link to the cell where the snake/ladder leads.
- Each player starts at 0.
- Every move of a player is made by adding the number of steps to its current cell number.
- The player, if lands on a snake/ladder cell, moves to the corresponding cell.

## Technology Stack
* Runtime - [Nodejs](https://nodejs.org/en/)

### Installation
to install this project on your local system follow these steps -
- clone this repo: use `git clone https://github.com/avinashb98/snakes-and-ladders.git`
- change directory: `cd snakes-and-ladders`
- install npm modules: `npm install`

### Run
to run the game
- make changes to the `sampleInput.js` file as per your wish
- run `npm start`

### Testing
to run tests
- run `npm test`