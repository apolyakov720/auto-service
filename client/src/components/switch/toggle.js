import React from 'react';

import Switch from './switch';

class Toggle extends React.Component {
  render() {
    const { caption, ...inputProps } = this.props;

    return <Switch caption={caption} type="checkbox" baseClass="toggle" {...inputProps} />;
  }
}

export default Toggle;
