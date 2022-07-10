import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import Calendar from '@components/shared/calendar';
import Dropdown from '@components/shared/dropdown';
// import { NormalizerService } from '@services';
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
    console.log(date);
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
    const { open, selectedDate } = this.state;

    let theme = null;

    if (open) {
      theme = CSSConstants.THEMES.PRIMARY;
    }

    return (
      <div className="date-picker">
        <Input
          theme={theme}
          dropdown={open}
          mask={NormalizerConstants.MASKS.DATE}
          onChange={this.onChangeDate}
          value={selectedDate}>
          <Input.Effect onClick={this.toggleOpen}>
            <Icon source={Icon.sources.base.calendar} />
          </Input.Effect>
        </Input>
        <Dropdown open={open}>
          <Dropdown.Header>
            <Calendar onSelect={this.onSelectCalendarDate} />
          </Dropdown.Header>
          <Dropdown.Footer onApply={this.onApplyCalendarDate} onCancel={this.onCancelPick} />
        </Dropdown>
      </div>
    );
  }
}

DatePicker.propTypes = {
  onPick: PropTypes.func,
};

export default DatePicker;
