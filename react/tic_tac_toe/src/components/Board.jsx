import Square from './Square.jsx';
import React, { Component } from 'react';
import calculateWinner from '../utils/calculateWinner';
import '../styles/Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    return <Square
      value={ this.state.squares[i] }
      onClick={ () => this.handleClick(i) }
      />;
  }

  handleClick(i) {
    let squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  render() {
    let next = this.state.xIsNext ? 'X' : 'O';
    let winner = calculateWinner(this.state.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${next}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
