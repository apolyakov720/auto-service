import React from 'react';

import { CSSUtils, DateUtils } from '@utils';

class WeekDays extends React.PureComponent {
  render() {
    const weekClass = CSSUtils.mergeModifiers('calendar__week', {
      'day-of-week': true,
    });

    return (
      <ul className={weekClass}>
        {DateUtils.getWeekDays().map((weekDay) => (
          <li className="calendar__day" key={weekDay}>
            {weekDay}
          </li>
        ))}
      </ul>
    );
  }
}

export default WeekDays;
