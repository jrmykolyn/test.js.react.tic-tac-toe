import React from 'react';

export default class Cell extends React.Component {
  render() {
    const baseClasses = ['cell'];
    const hasVal = typeof this.props.val === 'number';
    let innerElem = '';

    if (hasVal) {
      baseClasses.push(`player-${this.props.val}`);
      innerElem = <span></span>
    }

    return (
      <div className={ baseClasses.join(' ') } onClick={ this.props.onClick }>
        { innerElem }
      </div>
    );
  }
}
