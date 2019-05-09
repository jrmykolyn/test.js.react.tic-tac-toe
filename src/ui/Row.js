import React from 'react';
import Cell from './Cell';

const Row = (props) => {
  const cells = props.row.map((val, i) =>
    <Cell key={ i } val={ val } onClick={ () => props.onClick(i) } />
  );

  return (
    <div className="row">
    { cells }
    </div>
  );
}

export default Row;
