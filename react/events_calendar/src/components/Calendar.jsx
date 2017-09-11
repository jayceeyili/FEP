import React, { Component } from 'react';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    const date = new Date();

    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      selectedYear: date.getFullYear(),
      selectedMonth: date.getMonth(),
      selectedDate: date.getDate(),
      selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      startDay: 1,
      weekNumbers: false,
      dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      monthNamesFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      firstMonth: null,
      daysInMonth: null,
      minDate: null,
      disablePast: false
    }
  }

  render() {
    return (
      <div>{ this.state.selectedMonth }</div>
    )
  }
}
