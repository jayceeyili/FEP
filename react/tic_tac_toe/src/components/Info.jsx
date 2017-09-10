import React from 'react';
import MoveEntry from './MoveEntry.jsx';

const Info = props => (
  <div className="game-info">
    <div>{ props.status }</div>
    <ol>
      { props.history.map((step, i) => <MoveEntry
        key={ i }
        onClick={ (i) => props.onClick(i) }
        />
      )}
    </ol>
  </div>
);

export default Info;
