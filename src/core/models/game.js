export default class Game {
  constructor() {
    this._state = [[], [], []];
    this._currentPlayer = 0;
  }

  play(row, column) {
    this._state[row][column] = this._currentPlayer;
    this._currentPlayer = this._currentPlayer % 2 === 0 ? 1 : 0;
  }
}
