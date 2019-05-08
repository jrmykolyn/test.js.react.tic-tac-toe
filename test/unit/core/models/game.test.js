import { expect } from 'chai';
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
      expect(new Game()._state).to.eql([[], [], []]);
    });

    it('should set up the current player', () => {
      expect(new Game()._currentPlayer).to.eq(0);
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
    });
  });
});
