import Board from './Board.jsx';
import React, { Component } from 'react';
import calculateWinner from '../utils/calculateWinner';
import '../styles/Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i) {
    // let history = this.state.history;
    // let current = history[history.length - 1];
    let winner = calculateWinner(this.state.squares);
    let squares = this.state.squares.slice();

    if (winner || squares[i]) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...this.state.history, ...[{
        squares: squares
      }]],
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  render() {
    // let history = this.state.history;
    // let current = history[history.length - 1];
    let winner = calculateWinner(this.state.squares);
    let next = this.state.xIsNext ? 'X' : 'O';
    const status = winner ? `Winner: ${winner}` : `Next player: ${next}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={ this.state.squares }
            onClick={ (x) => this.handleClick(x) }
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
