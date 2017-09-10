import React from 'react';
import MoveEntry from './MoveEntry.jsx';

const Info = props => (
  <div className="game-info">
    <div>{ props.status }</div>
    <ol>
      { props.history.map((step, move) => <MoveEntry
        key={ move }
        move={ move }
        onClick={ props.onClick }
        />
      )}
    </ol>
  </div>
);

export default Info;
