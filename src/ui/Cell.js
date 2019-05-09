import React from 'react';

const Cell = (props) => {
  const baseClasses = ['cell'];
  const hasVal = typeof props.val === 'number';
  let innerElem = '';

  if (hasVal) {
    baseClasses.push(`player-${props.val}`);
    innerElem = <span></span>
  }

  return (
    <div className={ baseClasses.join(' ') } onClick={ props.onClick }>
    { innerElem }
    </div>
  );
}

export default Cell;
