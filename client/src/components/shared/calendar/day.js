import React from 'react';

import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';
import dateUtils from '@utils/date';

class Day extends React.PureComponent {
  onClick = () => {
    const { onSelect, date } = this.props;

    commonUtils.isFunction(onSelect) && onSelect(dateUtils.parseStringDate(date));
  };

  render() {
    const { day, selected, outside } = this.props;

    const dayClass = CSSUtils.mergeModifiers('calendar__day', {
      selected,
      outside,
    });

    return (
      <li className={dayClass} onClick={this.onClick}>
        {day}
      </li>
    );
  }
}

export default Day;
