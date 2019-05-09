import React from 'react';
import Row from './Row';

export default class Board extends React.Component {
  render() {
    const rows = this.props.rows.map((row, i) => <Row key={ i } row={ row } onClick={ (j) => {
      this.props.onClick(i, j);
    } } />);

    return (
      <div className="board">
        { rows }
      </div>
    );
  }
}
