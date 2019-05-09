import React from 'react';
import Row from './Row';

const Board = (props) => {
    const rows = props.rows.map((row, i) =>
      <Row key={ i } row={ row } onClick={ (j) => { props.onClick(i, j) } } />
    );

    return (
      <div className="board">
        { rows }
      </div>
    );
};

export default Board;
