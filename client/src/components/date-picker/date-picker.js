import React from 'react';

import FormField from '@components/form-field';
import Input from '@components/input';
import Icon from '@components/icon';
import Calendar from '@components/calendar';
import Button from '@components/button';
import { CSSConstants } from '@constants';

class DatePicker extends React.Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setOpen(!this.state.open);
  };

  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };

  render() {
    const { open } = this.state;
    const { label, required } = this.props;

    const theme = open ? CSSConstants.theme.PRIMARY : '';

    return (
      <div className="date-picker">
        <div className="date-picker__control" onClick={this.toggleOpen}>
          <FormField label={label} required={required}>
            <Input
              effect={<Icon source={Icon.sources.base.calendar} />}
              theme={theme}
              dropdown={open}
            />
          </FormField>
        </div>
        {open && (
          <div className="dropdown">
            <div className="dropdown__main">
              <Calendar />
            </div>
            <div className="dropdown__footer">
              <Input />
              <Button caption="Отмена" />
              <Button caption="Применить" theme={CSSConstants.theme.PRIMARY} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DatePicker;
