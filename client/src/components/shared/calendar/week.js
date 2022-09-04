import React from 'react';

import Day from './day';
import { dateUtils, commonUtils } from '@utils';

class Week extends React.PureComponent {
  get days() {
    const { start, month, selected, onSelectDay } = this.props;

    const startDay = dateUtils.getStartOfWeek(start);

    return [0, 1, 2, 3, 4, 5, 6].map((value) => {
      const date = dateUtils.addDays(startDay, value);

      const isOutside = !commonUtils.isEmpty(month) && month !== dateUtils.getMonth(date);
      const isSelected = dateUtils.isSameDay(date, selected);

      return (
        <Day
          key={value}
          date={date.toString()}
          day={dateUtils.getDay(date)}
          outside={isOutside}
          selected={isSelected}
          onSelect={onSelectDay}
        />
      );
    });
  }

  render() {
    return <ul className="calendar__week">{this.days}</ul>;
  }
}

export default Week;
