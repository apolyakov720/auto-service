import React from 'react';
import PropTypes from 'prop-types';

import Button from '@components/shared/button';
import Icon from '@components/shared/icon';
import Week from './week';
import { DateUtils, CSSUtils } from '@utils';
import { CSSConstants } from '@constants';

/** Компонент "Calendar" (Календарь) */
class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);

    let current = DateUtils.parseISO(props.originalISODate);

    if (!DateUtils.isValid(current)) {
      current = new Date();
    }

    this.state = {
      date: current,
      selected: current,
    };
  }

  componentDidMount() {
    this.onSelectDate(this.state.selected);
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

    const weekDaysClass = CSSUtils.mergeModifiers('calendar__week', {
      'day-of-week': true,
    });

    return <ul className={weekDaysClass}>{weekDays}</ul>;
  }

  get weeks() {
    const { date, selected } = this.state;

    const weeks = [];
    let startWeek = DateUtils.getStartOfWeekMonth(date);

    [0, 1, 2, 3, 4, 5].forEach((value) => {
      weeks.push(
        <Week
          key={value}
          start={startWeek}
          month={DateUtils.getMonth(date)}
          selected={selected}
          onSelectDate={this.onSelectDate}
        />,
      );

      startWeek = DateUtils.addWeeks(startWeek, 1);
    });

    return weeks;
  }

  setDate = (date) => {
    this.setState(date);
  };

  setNextMonth = () => {
    this.setDate({
      date: DateUtils.addMonths(this.state.date, 1),
    });
  };

  setPreviousMonth = () => {
    this.setDate({
      date: DateUtils.addMonths(this.state.date, -1),
    });
  };

  onSelectDate = (date) => {
    const { onSelect, formatReturnValue } = this.props;

    this.setDate({
      date,
      selected: date,
    });

    onSelect && onSelect(DateUtils.formatSelectedDate(date, formatReturnValue));
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar__header">
          <Button
            extra={<Icon source={Icon.sources.base.chevronLeft} size={CSSConstants.SIZES.S} bold />}
            onClick={this.setPreviousMonth}
            noStroke
          />
          <div className="calendar__month">{this.header}</div>
          <Button
            extra={
              <Icon source={Icon.sources.base.chevronRight} size={CSSConstants.SIZES.S} bold />
            }
            onClick={this.setNextMonth}
            noStroke
          />
        </div>
        <div className="calendar__daily-planner">
          {this.weekDays}
          {this.weeks}
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  /**
   * Начальая дата в формате ISO 8601.
   * Если дата недействительна, то значение будет сегодняшнее число.
   * */
  originalISODate: PropTypes.instanceOf(Date),
  /** Формат возвращаемой даты. */
  formatReturnValue: PropTypes.string,
  /**
   * Функция обработчик, вызывается при каждом выборе даты.
   * Принимает значение даты в качестве единственного аргумента в формате, указанном в свойстве formatReturnValue.
   * */
  onSelect: PropTypes.func,
};

Calendar.defaultProps = {
  formatReturnValue: 'dd.MM.yyyy',
};

export default Calendar;
