import React from 'react';
import './GridEntry.css';

const GridEntry = props => {
  return (
  <div className='Grid-cell'>
    <img
      src={ props.clicked ? props.ele.url : props.ele.thumbnailUrl }
      alt=''
      onClick={ () => props.onClick(props.idx) }
    />
  </div>
)};

export default GridEntry;
