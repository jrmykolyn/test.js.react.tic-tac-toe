import { expect } from 'chai';
import * as sinon from 'sinon';
import { Game } from '../../../../src/core';

describe('Game', () => {
  describe('General', () => {
    it('should be importable', () => {
      expect(Game).to.be.a('function');
    });

    it('should be constructable', () => {
      expect(new Game()).to.be.an.instanceof(Game);
    });
  });

  describe('Constructor', () => {
    it('should set up the initial state', () => {
      expect(new Game()._state).to.eql([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
    });

    it('should set up the current player', () => {
      expect(new Game()._currentPlayer).to.eq(0);
    });

    it('should set the `isComplete` property to `false`', () => {
      expect(new Game()._isComplete).to.be.false;
    });

    it('should set the `wonBy` property to `false`', () => {
      expect(new Game()._wonBy).to.be.null;
    });
  });

  describe('Instance methods', () => {
    let game;

    beforeEach(() => {
      game = new Game();
    });

    describe('play()', () => {
      it('should apply the current player\'s identifier using the coordinates provided', () => {
        const row = 0;
        const column = 0;
        const coords = [row, column];

        game.play(...coords);

        expect(game._state[row][column]).to.eq(0);
      });

      it('should not apply the current player\'s identifier if the game is complete', () => {
        const row = 0;
        const column = 0;
        const coords = [row, column];
        game._state = [[0]];
        game._currentPlayer = 'Foo';
        game._isComplete = true;

        game.play(...coords);

        expect(game._state[row][column]).to.eq(0);
      });

      it('should not apply the current player\'s identifier if the target cell is occupied', () => {
        const row = 0;
        const column = 0;
        const coords = [row, column];
        game._state = [[0]];
        game._currentPlayer = 'Foo';

        game.play(...coords);

        expect(game._state[row][column]).to.eq(0);
      });

      it('should alternate between players', () => {
        const row1 = 0;
        const column1 = 0;
        const row2 = 0;
        const column2 = 1;
        const coords1 = [row1, column1];
        const coords2 = [row2, column2];

        game.play(...coords1);
        game.play(...coords2);

        expect(game._state[row1][column1]).to.eq(0);
        expect(game._state[row2][column2]).to.eq(1);
      });

      it('should not alternate between players if the game is complete', () => {
        game._isComplete = true;
        game._currentPlayer = 'Foo';

        game.play(0, 0);

        expect(game._currentPlayer).to.eq('Foo');
      });

      it('should not alternate between players if the target cell is occupied', () => {
        game._state = [[0]];
        game._currentPlayer = 'Foo';

        game.play(0, 0);

        expect(game._currentPlayer).to.eq('Foo');
      });

      it('should update the `isComplete` property using `checkWin`', () => {
        const checkWin = game.checkWin = sinon.spy(() => true);
        game._isComplete = false;

        game.play(0, 0);

        expect(checkWin.called).to.be.true;
        expect(game._isComplete).to.be.true;
      });

      it('should set the `wonBy` property to the current player when the game is complete', () => {
        const currentPlayer = 'Foo';
        game._currentPlayer = currentPlayer;
        game.checkWin = () => true;

        game.play(0, 0);

        expect(game._wonBy).to.eq(currentPlayer);
      });

      it('should return `true` when the play is successful', () => {
        expect(game.play(0, 0)).to.be.true;
      });

      it('should return `false` if the game is complete', () => {
        game._isComplete = true;

        expect(game.play(0, 0)).to.be.false;
      });

      it('should return `false` if the target cell is occupied', () => {
        game._state = [[0]];

        expect(game.play(0, 0)).to.be.false;
      });
    });

    describe('checkWin()', () => {
      it('should return `false` if the game has not been won', () => {
        expect(game.checkWin()).to.be.false;
      });

      it('should check for a "row"-type win', () => {
        game._state = [[0, 0, 0], [], []];

        expect(game.checkWin()).to.be.true;
      });

      it('should check for a "column"-type win', () => {
        game._state = [[0], [0], [0]];

        expect(game.checkWin()).to.be.true;
      });

      it('should check for a "diagonal"-type win', () => {
        game._state = [
          [0],
          [1, 0],
          [1, 1, 0],
        ];

        expect(game.checkWin()).to.be.true;
      });
    });

    describe('isTaken()', () => {
      it('should return `true` if the target cell is occupied', () => {
        game._state = [[0]];

        expect(game.isTaken(0, 0,)).to.be.true;
      });

      it('should return `false` if the target cell contains a `null` value', () => {
        expect(game.isTaken(0, 0)).to.be.false;
      });
    });

    describe('reset()', () => {
      it('should reset the game state', () => {
        game._state = 'Foo';

        game.reset();

        expect(game._state).to.eql([
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ]);
      });

      it('should reset the current player', () => {
        game._currentPlayer = 'Foo';

        game.reset();

        expect(game._currentPlayer).to.eq(0);
      });

      it('should set the `isComplete` property to `false`', () => {
        game._isComplete = true;

        game.reset();

        expect(game._isComplete).to.be.false;
      });
    });

    describe('getAllAvailableCoords()', () => {
      it('should return the coordinates of each unoccupied cell', () => {
        const coords = game.getAllAvailableCoords();

        expect(coords.length).to.eq(9);
        expect(coords.every(([row, col]) => typeof row === 'number' && typeof col === 'number')).to.be.true;
      });

      it('should exclude cells that are occupied', () => {
        game._state[0][0] = 0;

        const coords = game.getAllAvailableCoords();

        expect(coords.length).to.eq(8);
        expect(coords[0]).to.eql([0, 1]);
      });
    });

    describe('getRandomAvailableCoords()', () => {
      it('should return a random pair of available coordinates', () => {
        const vals = [0, 1, 2];
        const getAllAvailableCoords = game.getAllAvailableCoords = sinon.spy(() => vals);

        const coords = game.getRandomAvailableCoords();

        expect(getAllAvailableCoords.called).to.be.true;
        expect(vals.includes(coords)).to.be.true;
      });

      it('should return the only pair of available coordinates', () => {
        const vals = [0];
        const getAllAvailableCoords = game.getAllAvailableCoords = sinon.spy(() => vals);

        const coords = game.getRandomAvailableCoords();

        expect(getAllAvailableCoords.called).to.be.true;
        expect(vals[0]).to.eq(coords);
      });

      it('should return `undefined` if there are no available coordinates', () => {
        const getAllAvailableCoords = game.getAllAvailableCoords = sinon.spy(() => []);

        const coords = game.getRandomAvailableCoords();

        expect(getAllAvailableCoords.called).to.be.true;
        expect(coords).to.be.undefined;
      });
    });

    describe('getRows()', () => {
      it('should return a two-dimensional array of row data', () => {
        const rows = [];
        game._state = rows;

        expect(game.getRows()).to.eq(rows);
      });
    });

    describe('getColumns()', () => {
      it('should return a two-dimensional array of column data', () => {
        const col1 = new Array(3).fill(0);
        const col2 = new Array(3).fill(1);
        const col3 = new Array(3).fill(2);
        game._state = [
          [0, 1, 2],
          [0, 1, 2],
          [0, 1, 2],
        ];

        const result = game.getColumns();
        const [a, b, c] = result

        expect(result.length).to.eq(3);
        expect(a).to.eql(col1);
        expect(b).to.eql(col2);
        expect(c).to.eql(col3);
      });
    });
  });
});
