import React from 'react';

import FormControl from '@components/form-control';
import Icon from '@components/icon';
import ScrollBox from '@components/scroll-box';

class Select extends React.Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { open } = this.state;

    const chevron = open ? (
      <Icon source={Icon.sources.base.chevronUp} />
    ) : (
      <Icon source={Icon.sources.base.chevronDown} />
    );

    return (
      <div className="select">
        <FormControl
          effect={chevron}
          additionalProps={{
            onEffectClick: this.toggleOpen,
          }}>
          <div className="select__sample">Select</div>
        </FormControl>
        {open && (
          <div className="select__list">
            <ScrollBox>
              <div>hello</div>
            </ScrollBox>
          </div>
        )}
      </div>
    );
  }
}

export default Select;
