import React from 'react';

import Day from './day';
import { DateUtils, CommonUtils } from '@utils';

class Week extends React.Component {
  get days() {
    const { start, month, selected, onSelectDate } = this.props;

    const startDay = DateUtils.getStartOfWeek(start);

    return [0, 1, 2, 3, 4, 5, 6].map((value) => {
      const date = DateUtils.addDays(startDay, value);
      const isOutside = !CommonUtils.isEmpty(month) && month !== DateUtils.getMonth(date);
      const isSelected = DateUtils.isSameDay(date, selected);

      return (
        <Day
          key={value}
          date={date}
          outside={isOutside}
          selected={isSelected}
          onClick={onSelectDate}
        />
      );
    });
  }

  render() {
    return <ul className="calendar__week">{this.days}</ul>;
  }
}

export default Week;
