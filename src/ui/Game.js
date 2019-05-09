import React from 'react';
import Board from './Board';
import Modal from './Modal';

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
    const modal = this.state.game._isComplete
      ? <Modal winner={ this.state.game._currentPlayer } onClick={ this.reset } />
      : '';

    return (
      <section className="game">
        <Board rows={ this.state.game.getRows() } onClick={ this.handleClick } />
        { modal }
      </section>
    );
  }
}
