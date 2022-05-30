import React from 'react';
import Switch from './switch';

class Radio extends React.Component {
  render() {
    const { group, caption, ...inputProps } = this.props;

    return <Switch type="radio" name={group} baseClass="radio" caption={caption} {...inputProps} />;
  }
}

export default Radio;
