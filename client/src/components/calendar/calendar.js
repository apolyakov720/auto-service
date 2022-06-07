import React from 'react';

import Week from './week';
import { DateUtils } from '@utils';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  get weeks() {
    const { date } = this.state;

    const weeks = [];
    let startWeek = DateUtils.getStartOfWeekMonth(date);

    [0, 1, 2, 3, 4, 5].forEach((value) => {
      weeks.push(
        <Week key={value} start={startWeek} month={DateUtils.getMonth(date)} selected={date} />,
      );

      startWeek = DateUtils.addWeeks(startWeek, 1);
    });

    return weeks;
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar__header"></div>
        <div className="calendar__daily-planner">{this.weeks}</div>
      </div>
    );
  }
}

export default Calendar;
