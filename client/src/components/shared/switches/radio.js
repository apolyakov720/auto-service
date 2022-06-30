import React from 'react';
import PropTypes from 'prop-types';

import Switch from './switch';

/** Компонент переключателя "Radio" (Радиокнопка) */
class Radio extends React.PureComponent {
  render() {
    const { group, caption, ...inputProps } = this.props;

    return <Switch type="radio" name={group} baseClass="radio" caption={caption} {...inputProps} />;
  }
}

Radio.propTypes = {
  /**
   * Имя группы взаимосвязанных переключателей.
   * Обязательно для заполнения.
   * */
  group: PropTypes.string.isRequired,
  /** Подпись к переключателю. */
  caption: PropTypes.string,
  /** Различные события и/или пользовательские атрибуты HTML элемента формы "input". */
  inputProps: PropTypes.object,
};

export default Radio;
