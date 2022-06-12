import React from 'react';

import Switch from './switch';
import Icon from '@components/icon';
import { CSSConstants } from '@constants';

class Checkbox extends React.Component {
  render() {
    const { caption, ...inputProps } = this.props;

    return (
      <Switch type="checkbox" baseClass="checkbox" caption={caption} {...inputProps}>
        <Icon source={Icon.sources.base.check} size={CSSConstants.size.XXL} />
      </Switch>
    );
  }
}

export default Checkbox;
