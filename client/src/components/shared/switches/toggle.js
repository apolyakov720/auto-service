import React from 'react';
import PropTypes from 'prop-types';

import Switch from './switch';

/** Компонент переключателя "Toggle" (Тумблер) */
class Toggle extends React.PureComponent {
  render() {
    const { caption, ...inputProps } = this.props;

    return <Switch caption={caption} type="checkbox" baseClass="toggle" {...inputProps} />;
  }
}

Toggle.propTypes = {
  /** Подпись к переключателю. */
  caption: PropTypes.string,
  /** Различные события и/или пользовательские атрибуты HTML элемента формы "input". */
  inputProps: PropTypes.object,
};

export default Toggle;
