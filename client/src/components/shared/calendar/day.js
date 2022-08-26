import React from 'react';

import { CSSUtils, CommonUtils, DateUtils } from '@utils';

class Day extends React.PureComponent {
  onClick = () => {
    const { onSelect, date } = this.props;

    CommonUtils.isFunction(onSelect) && onSelect(DateUtils.parseStringDate(date));
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
