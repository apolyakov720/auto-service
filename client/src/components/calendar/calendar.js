import React from 'react';

import Icon from '@components/icon';
import Week from './week';
import { DateUtils } from '@utils';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  get header() {
    return DateUtils.formatDisplayedDate(this.state.date);
  }

  get weekDays() {
    const { date } = this.state;

    const startWeek = DateUtils.getStartOfWeekMonth(date);

    const weekDays = [0, 1, 2, 3, 4, 5, 6].map((value) => {
      const day = DateUtils.addDays(startWeek, value);
      const weekDay = DateUtils.formatWeekDay(day);

      return (
        <li className="calendar__day" key={value}>
          {weekDay}
        </li>
      );
    });

    return <ul className="calendar__week-days">{weekDays}</ul>;
  }

  get weeks() {
    const { date } = this.state;

    const weeks = [];
    let startWeek = DateUtils.getStartOfWeekMonth(date);

    [0, 1, 2, 3, 4, 5].forEach((value) => {
      weeks.push(
        <Week
          key={value}
          start={startWeek}
          month={DateUtils.getMonth(date)}
          selected={date}
          onSelectDate={this.onSelectDate}
        />,
      );

      startWeek = DateUtils.addWeeks(startWeek, 1);
    });

    return weeks;
  }

  setDate = (date) => {
    this.setState({ date });
  };

  setNextMonth = () => {
    this.setDate(DateUtils.addMonths(this.state.date, 1));
  };

  setPreviousMonth = () => {
    this.setDate(DateUtils.addMonths(this.state.date, -1));
  };

  onSelectDate = (date) => {
    this.setDate(date);
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar__header">
          <div onClick={this.setPreviousMonth}>
            <Icon source={Icon.sources.base.chevronLeft} size="s" bold />
          </div>
          <div className="calendar__month">{this.header}</div>
          <div onClick={this.setNextMonth}>
            <Icon source={Icon.sources.base.chevronRight} size="s" bold />
          </div>
        </div>
        <div className="calendar__daily-planner">
          {this.weekDays}
          {this.weeks}
        </div>
      </div>
    );
  }
}

export default Calendar;
