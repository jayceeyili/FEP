import Board from './Board.jsx';
import React, { Component } from 'react';
import calculateWinner from '../utils/calculateWinner';
import '../styles/Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true
    }
  }

  handleClick(i) {
    console.log(i);
  }

  render() {
    let history = this.state.history;
    let current = history[history.length - 1];
    let winner = calculateWinner(current.squares);
    let next = this.state.xIsNext ? 'X' : 'O';
    const status = winner ? `Winner: ${winner}` : `Next player: ${next}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={ current.squares }
            onClick={ this.handleClick }
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
