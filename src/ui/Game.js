import React from 'react';
import Modal from './Modal';
import Row from './Row';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      game: this.props.game,
    };
  }

  handleClick(row, column) {
    this.state.game.play(row, column);

    this.setState({
      updatedAt: new Date().getTime(),
    });
  }

  reset() {
    this.state.game.reset();
    this.setState({ updatedAt: new Date().getTime() });
  }

  render() {
    const rows = this.state.game.getRows().map((row, i) => <Row key={ i } row={ row } onClick={ (j) => {
      this.handleClick(i, j);
    } } />);

    const modal = this.state.game._isComplete
      ? <Modal winner={ this.state.game._currentPlayer } onClick={ this.reset } />
      : '';

    return (
      <section className="game">
        <div className="game__board">
          { rows }
        </div>
        { modal }
      </section>
    );
  }
}
