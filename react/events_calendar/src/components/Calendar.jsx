import React, { Component } from 'react';

// const Calendar = props => {
//
//   return (
//     <div>
//       This is the Calendar
//     </div>
//   )
// };
//
// export default Calendar;
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    const date = new Date();

    this.state = {
      year: date.getFullYear(),
      month: date.getMonth()
    }
  }

  render() {
    return (
      <div>{ this.state.year + ' ' + this.state.month }</div>
    )
  }
}
