import React from 'react';

export default class Modal extends React.Component {
  render() {
    const msg = typeof this.props.winner === 'number'
      ? `The winner is Player ${this.props.winner + 1}!`
      : 'Whoops, the game is a draw!';

    return (
      <div className="modal-wrapper">
        <div className="modal-wrapper__content">
          <article className="modal">
            <div className="modal__inner">
              <header>
                <h1>Game Over!</h1>
              </header>
              <div>
                <p>{ msg }</p>
              </div>
              <footer>
                <button onClick={ this.props.onClick }>Play Again</button>
              </footer>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
