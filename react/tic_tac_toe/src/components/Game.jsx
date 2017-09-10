import Board from './Board.jsx';
import React, { Component } from 'react';
import Info from './Info.jsx';
import calculateWinner from '../utils/calculateWinner';
import '../styles/Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let winner = calculateWinner(current.squares);
    let squares = current.squares.slice();

    if (winner || squares[i]) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...this.state.history, ...[{
        squares: squares
      }]],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(i) {
    // this.setState({
    //   stepNumber: i,
    //   xIsNext: i % 2 === 0
    // })
    console.log(i);
  }

  render() {
    let history = this.state.history;
    let current = history[this.state.stepNumber];
    let winner = calculateWinner(current.squares);
    let next = this.state.xIsNext ? 'X' : 'O';
    const status = winner ? `Winner: ${winner}` : `Next player: ${next}`;

    // const moves = history.map((step, i) => {
    //   const desc = i ? `Move #${i}` : 'Game Start';
    //   return (
    //     <li key={ i }>
    //       <a
    //         href="#"
    //         onClick={ () => this.jumpTo(i) }
    //       >
    //         { desc }
    //       </a>
    //     </li>
    //   )
    // });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={ current.squares }
            onClick={ (x) => this.handleClick(x) }
          />
        </div>
        <Info
          history={ history }
          status={ status }
          onClick={ (i) => this.jumpTo(i) }
        />
      </div>
    );
  }
}
