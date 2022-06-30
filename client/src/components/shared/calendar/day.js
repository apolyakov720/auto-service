import React from 'react';

import { CSSUtils, DateUtils } from '@utils';

class Day extends React.Component {
  onClickDay = () => {
    const { onClick, date } = this.props;

    onClick && onClick(date);
  };

  render() {
    const { date, selected, outside } = this.props;

    const dayClass = CSSUtils.mergeModifiers('calendar__day', {
      selected,
      outside,
    });

    return (
      <li className={dayClass} onClick={this.onClickDay}>
        {DateUtils.getDay(date)}
      </li>
    );
  }
}

export default Day;
