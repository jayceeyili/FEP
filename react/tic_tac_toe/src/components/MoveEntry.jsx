import React from 'react';

const MoveEntry = props => {
  const desc = props.move ? `Move #${props.move}` : 'Game Start';

  return (
    <div>
      <li
        onClick={ () => props.onClick(props.move) }
      >{ desc }
      </li>
    </div>
  )
};

export default MoveEntry;
