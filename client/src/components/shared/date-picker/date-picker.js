import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import Calendar from '@components/shared/calendar';
import Dropdown from '@components/shared/dropdown';
import { isFunction } from '@utils/common';
import { parseDate, formatDate } from '@utils/date';
import { CSSThemes } from '@utils/css';

/** Компонент "DatePicker" (Поле выбора даты) */
class DatePicker extends React.PureComponent {
  constructor(props) {
    super(props);

    const value = parseDate({
      value: props.value,
      format: props.format,
      defaultValue: '',
    });

    this.state = {
      value: this.normalizeDate(value),
    };
  }

  normalizeDate = (value) => {
    const { format } = this.props;

    return formatDate(value, format);
  };

  onChangeDate = (value) => {
    const { onChange } = this.props;

    this.setState({
      value,
    });

    isFunction(onChange) && onChange(value);
  };

  render() {
    const { mask, theme, format, ...inputProps } = this.props;
    const { value } = this.state;

    let dropdownTheme = theme || CSSThemes.primary;

    const dropdownTrigger = (onToggleOpen, openState) => {
      let inputTheme;

      if (openState) {
        inputTheme = CSSThemes.primary;
      }

      if (theme) {
        inputTheme = theme;
      }

      return (
        <Input
          {...inputProps}
          theme={inputTheme}
          mask={mask}
          value={value}
          onChange={this.onChangeDate}>
          <Input.Effect onClick={onToggleOpen}>
            <Icon source={Icon.sources.base.calendar} />
          </Input.Effect>
        </Input>
      );
    };

    return (
      <div className="date-picker">
        <Dropdown trigger={dropdownTrigger} theme={dropdownTheme}>
          <Dropdown.Header>
            <Calendar value={value} onSelect={this.onChangeDate} format={format} />
          </Dropdown.Header>
          <Dropdown.Controls onCancel />
        </Dropdown>
      </div>
    );
  }
}

DatePicker.propTypes = {
  format: PropTypes.string,
  mask: PropTypes.string,
  onChange: PropTypes.func,
};

DatePicker.defaultProps = {
  format: 'dd.MM.yyyy',
  mask: 'date',
};

export default DatePicker;
