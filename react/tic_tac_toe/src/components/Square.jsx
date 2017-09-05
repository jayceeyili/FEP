import React, { Component } from 'react';
import '../styles/Square.css';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }

    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    this.setState({
      value: 'X'
    })
  }

  render() {
    return (
      <button
        className="square"
        onClick={ this.getValue }
      >{ this.state.value }
      </button>
    );
  }
}
