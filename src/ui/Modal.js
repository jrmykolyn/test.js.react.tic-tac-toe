import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-wrapper__content">
          <article className="modal">
            <div className="modal__inner">
              <header>
                <h1>Game Over!</h1>
              </header>
              <div>
                <p>The winner is Player { this.props.winner + 1 }!</p>
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
