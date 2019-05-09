import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render() {
    const cells = this.props.row.map((val, i) => <Cell key={ i } val={ val } onClick={ () => this.props.onClick(i) } />);

    return (
      <div className="row">
        { cells }
      </div>
    );
  }
}
