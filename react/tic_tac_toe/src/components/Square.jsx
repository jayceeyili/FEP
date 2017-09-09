// import React, { Component } from 'react';
import React from 'react';
import '../styles/Square.css';

// export default class Square extends Component {
//
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={ () => this.props.onClick() }
//       >{ this.props.value }
//       </button>
//     );
//   }
// }

const Square = props => (
  <button
    className="square"
    onClick={ props.onClick }
  >{ props.value }
  </button>
);

export default Square;
