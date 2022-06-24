import React from 'react';

import FormField from '@components/form-field';
import Input from '@components/input';
import Icon from '@components/icon';
import Calendar from '@components/calendar';
import Dropdown from "@components/dropdown";
import { NormalizerService } from "@services";
import { CSSConstants, NormalizerConstants } from '@constants';

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
        <div className="date-picker__control">
          <FormField label={label} required={required}>
            <Input
              effect={<Icon source={Icon.sources.base.calendar} />}
              additionalProps={{
                onEffectClick: this.toggleOpen,
              }}
              theme={theme}
              dropdown={open}
              mask={NormalizerConstants.mask.DATE}
            />
          </FormField>
        </div>
        <Dropdown open={open}>
          <Dropdown.Header>
            <Calendar onSelect={() => {}} />
          </Dropdown.Header>
          <Dropdown.Footer />
        </Dropdown>
      </div>
    );
  }
}

export default DatePicker;
