import React from 'react';

import CSSUtils from '@utils/css';
import dateUtils, { formats } from '@utils/date';

class WeekDays extends React.PureComponent {
  get weekDays() {
    const startWeek = dateUtils.getStartOfWeek();

    return [0, 1, 2, 3, 4, 5, 6].map((value) =>
      dateUtils.formatDate(dateUtils.addDays(startWeek, value), formats.weekDay).substring(0, 2),
    );
  }

  render() {
    const weekClass = CSSUtils.mergeModifiers('calendar__week', {
      'day-of-week': true,
    });

    return (
      <ul className={weekClass}>
        {this.weekDays.map((weekDay) => (
          <li className="calendar__day" key={weekDay}>
            {weekDay}
          </li>
        ))}
      </ul>
    );
  }
}

export default WeekDays;
