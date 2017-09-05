import Board from './Board.jsx';
import React, { Component } from 'react';
import '../styles/Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'ueee'
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{ this.state.status }</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
