import React from 'react';
import PropTypes from 'prop-types';

import Week from './week';
import WeekDays from './week-days';
import Button from '@components/shared/button';
import Icon from '@components/shared/icon';
import commonUtils from '@utils/common';
import dateUtils from '@utils/date';
import { CSSConstants } from '@constants';

/** Компонент "Calendar" (Календарь) */
class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);

    const date = this.getInitDate(props);

    this.state = {
      date,
      selected: date,
    };
  }

  componentDidMount() {
    const { selected } = this.state;

    this.onSelectDate(selected);
  }

  leftChevron = (<Icon source={Icon.sources.base.chevronLeft} size={CSSConstants.SIZES.S} bold />);

  rightChevron = (
    <Icon source={Icon.sources.base.chevronRight} size={CSSConstants.SIZES.S} bold />
  );

  getInitDate = (props) => {
    const { original, format } = props || this.props;

    let current = dateUtils.parse(original, format, new Date());

    if (!dateUtils.isValid(current)) {
      current = new Date();
    }

    return current;
  };

  get weeks() {
    const { date, selected } = this.state;

    const weeks = [];

    let startWeek = dateUtils.getStartOfWeekMonth(date);

    [0, 1, 2, 3, 4, 5].forEach((value) => {
      weeks.push(
        <Week
          key={value}
          start={startWeek}
          month={dateUtils.getMonth(date)}
          selected={selected}
          onSelectDay={this.onSelectDate}
        />,
      );

      startWeek = dateUtils.addWeeks(startWeek, 1);
    });

    return weeks;
  }

  setDate = (date) => {
    this.setState(date);
  };

  setMonth = (value) => {
    this.setDate(({ date }) => ({
      date: dateUtils.addMonths(date, value),
    }));
  };

  setNextMonth = () => {
    this.setMonth(1);
  };

  setPreviousMonth = () => {
    this.setMonth(-1);
  };

  onSelectDate = (date) => {
    const { onSelect, format } = this.props;

    this.setDate({
      date,
      selected: date,
    });

    commonUtils.isFunction(onSelect) && onSelect(dateUtils.formatSelectedDate(date, format));
  };

  render() {
    const { date } = this.state;

    return (
      <div className="calendar">
        <div className="calendar__header">
          <Button extra={this.leftChevron} onClick={this.setPreviousMonth} noStroke />
          <div className="calendar__month">{dateUtils.formatDisplayedDate(date)}</div>
          <Button extra={this.rightChevron} onClick={this.setNextMonth} noStroke />
        </div>
        <div className="calendar__daily-planner">
          <WeekDays />
          {this.weeks}
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  /**
   * Начальая дата.
   * Если дата недействительна, то значение будет сегодняшнее число.
   * */
  original: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** Формат даты. */
  format: PropTypes.string,
  /**
   * Функция обработчик, вызывается при каждом выборе даты.
   * Принимает значение даты в качестве единственного аргумента в формате, указанном в свойстве format.
   * */
  onSelect: PropTypes.func,
};

Calendar.defaultProps = {
  format: 'dd.MM.yyyy',
};

export default Calendar;
