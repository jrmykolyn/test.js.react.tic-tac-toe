import React from 'react';
import Row from './Row';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick(row, column) {
    this.props.game.play(row, column);

    this.setState({
      updatedAt: new Date().getTime(),
    });
  }

  render() {
    const rows = this.props.game.getRows().map((row, i) => <Row key={ i } row={ row } onClick={ (j) => {
      this.handleClick(i, j);
    } } />);

    return (
      <div className="game">
        { rows }
      </div>
    );
  }
}
