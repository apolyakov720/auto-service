import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import Calendar from '@components/shared/calendar';
import Dropdown from '@components/shared/dropdown';
import { CSSConstants, NormalizerConstants } from '@constants';

/** Компонент "DatePicker" (Выбор даты) */
class DatePicker extends React.PureComponent {
  state = {
    open: false,
    selectedDate: '',
    calendarDate: '',
  };

  toggleOpen = () => {
    this.setOpen(!this.state.open);
  };

  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  onSelectCalendarDate = (calendarDate) => {
    this.setState({
      calendarDate,
    });
  };

  onApplyCalendarDate = () => {
    this.setState(({ calendarDate }) => ({
      open: false,
      selectedDate: calendarDate,
    }));
  };

  onCancelPick = () => {
    this.setOpen(false);
  };

  render() {
    const { selectedDate } = this.state;

    const dropdownHeader = (
      <Calendar original={selectedDate} onSelect={this.onSelectCalendarDate} />
    );

    return (
      <div className="date-picker">
        <Dropdown
          header={dropdownHeader}
          onApply={this.onApplyCalendarDate}
          onCancel={this.onCancelPick}>
          {(onToggleOpen, openState) => {
            let theme = null;

            if (openState) {
              theme = CSSConstants.THEMES.PRIMARY;
            }

            return (
              <Input
                theme={theme}
                dropdown={openState}
                mask={NormalizerConstants.MASKS.DATE}
                onChange={this.onChangeDate}
                value={selectedDate}>
                <Input.Effect onClick={onToggleOpen}>
                  <Icon source={Icon.sources.base.calendar} />
                </Input.Effect>
              </Input>
            );
          }}
        </Dropdown>
      </div>
    );
  }
}

DatePicker.propTypes = {
  onPick: PropTypes.func,
};

export default DatePicker;
