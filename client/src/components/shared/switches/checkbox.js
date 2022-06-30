import React from 'react';
import PropTypes from 'prop-types';

import Switch from './switch';
import Icon from '@components/shared/icon';
import { CSSConstants } from '@constants';

/** Компонент переключателя "Checkbox" (Флажок) */
class Checkbox extends React.PureComponent {
  render() {
    const { caption, ...inputProps } = this.props;

    return (
      <Switch type="checkbox" baseClass="checkbox" caption={caption} {...inputProps}>
        <Icon source={Icon.sources.base.check} size={CSSConstants.SIZES.S} />
      </Switch>
    );
  }
}

Checkbox.propTypes = {
  /** Подпись к переключателю. */
  caption: PropTypes.string,
  /** Различные события и/или пользовательские атрибуты HTML элемента формы "input". */
  inputProps: PropTypes.object,
};

export default Checkbox;
