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
});