import React from 'react';
import Board from './Board';
import Modal from './Modal';

export default class Game extends React.Component {
  static get MODES() {
    return {
      SINGLE: 'single',
    };
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      ...this.props,
    };
  }

  handleClick(row, column) {
    if (
      this.state.game.play(row, column)
      && !this.state.game._isComplete
      && this.state.mode === Game.MODES.SINGLE
    ) {
      const coords = this.state.game.getRandomAvailableCoords();
      if (coords) this.state.game.play(...coords);
    }

    this.setState({
      updatedAt: new Date().getTime(),
    });
  }

  reset() {
    this.state.game.reset();
    this.setState({ updatedAt: new Date().getTime() });
  }

  render() {
    const modal = this.state.game._isComplete || !this.state.game.getRandomAvailableCoords()
      ? <Modal winner={ this.state.game._wonBy } onClick={ this.reset } />
      : '';

    return (
      <section className="game">
        <Board rows={ this.state.game.getRows() } onClick={ this.handleClick } />
        { modal }
      </section>
    );
  }
}
