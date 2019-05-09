export const JOIN_CHAR = '';
export const MAX_PLAYERS = 2;
export const WINS = ['000', '111'];

export default class Game {
  constructor() {
    // Prefer manual initialization over `Array#fill()` to prevent
    // a case where the outer array is filled with references to
    // the same memory location.
    this._state = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this._currentPlayer = 0;
  }

  play(row, column) {
    this._state[row][column] = this._currentPlayer;
    this._currentPlayer = this._currentPlayer % MAX_PLAYERS === 0 ? 1 : 0;
  }

  getRows() {
    return this._state;
  }

  getColumns() {
    const rows = this.getRows();

    return rows.map((row, i) => {
      return rows.map((_, j) => this._state[j][i]);
    });
  }

  getDiagonals() {
    const rows = this.getRows();
    const l = rows.length;
    const d1 = rows.map((row, i) => row[i]);
    const d2 = rows.map((row, i) => row[l - i]);
    return [d1, d2];
  }

  checkWin() {
    return this.checkRowWin() || this.checkColumnWin() || this.checkDiagonalWin();
  }

  checkRowWin() {
    return this.getRows().reduce((val, row) => {
      return val || WINS.includes(row.join(JOIN_CHAR));
    }, false);
  }

  checkColumnWin() {
    return this.getColumns().reduce((val, col) => {
      return val || WINS.includes(col.join(JOIN_CHAR));
    }, false);
  }

  checkDiagonalWin() {
    return this.getDiagonals().reduce((val, diag) => {
      return val || WINS.includes(diag.join(JOIN_CHAR))
    }, false);
  }
}
