import React from 'react';

class DatePicker extends React.Component {
  render() {
    return (
      <div className="date-picker">
        <div className="date-picker__calendar">calendar</div>
        <div className="date-picker__action-bar">action bar</div>
      </div>
    );
  }
}

export default DatePicker;
