import React, { Component } from 'react';

import Calendar from './Calendar.jsx';
import Event from './Event.jsx';

export default class App extends Component {

  render() {
    return (
      <div>
        <Calendar />
        <Event />
      </div>
    )
  }
}
