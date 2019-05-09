import React from 'react';

export default class Cell extends React.Component {
  render() {
    const baseClasses = ['cell'];

    if (typeof this.props.val === 'number') baseClasses.push(`player-${this.props.val}`);

    return (
      <div className={ baseClasses.join(' ' ) } onClick={ this.props.onClick }></div>
    );
  }
}
