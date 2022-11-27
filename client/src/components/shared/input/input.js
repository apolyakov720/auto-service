import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import FormControl from '@components/shared/form-control';
// TODO: рассмотреть возможность вынести отсюда NormalizerService
import NormalizerService from '@services/normalizer';
import { isFunction } from '@utils/common';
import { CSSThemes } from '@utils/css';

/** Компонент "Input" (Поле ввода) */
class Input extends React.PureComponent {
  state = {
    theme: null,
  };

  static Extra = (props) => FormControl.Extra(props);

  static Effect = (props) => FormControl.Effect(props);

  setTheme = () => {
    this.setState({
      theme: CSSThemes.primary,
    });
  };

  unsetTheme = () => {
    this.setState({
      theme: null,
    });
  };

  onChange = (event) => {
    const { onChange } = this.props;

    isFunction(onChange) && onChange(event?.target?.value);
  };

  onBlur = (event) => {
    const { onBlur } = this.props;

    this.unsetTheme();

    isFunction(onBlur) && onBlur(event);
  };

  onFocus = (event) => {
    const { onFocus } = this.props;

    this.setTheme();

    isFunction(onFocus) && onFocus(event);
  };

  render() {
    const { theme: externalTheme, mask, children, type, ...inputProps } = this.props;
    const { theme: internalTheme } = this.state;

    let theme = internalTheme;

    if (externalTheme) {
      theme = externalTheme;
    }

    return (
      <FormControl theme={theme}>
        {children}
        <FormControl.Control>
          <InputMask
            {...inputProps}
            type={type}
            className="input"
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            mask={NormalizerService.masks[mask]}
            maskChar={NormalizerService.maskChars[mask]}
            formatChars={NormalizerService.formatChars}
          />
        </FormControl.Control>
      </FormControl>
    );
  }
}

Input.propTypes = {
  /** Определяет тип поля ввода. */
  type: PropTypes.string,
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * Примечание: основная тема устанавливается в момент получения фокуса, если не было передано другой темы.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error', 'disabled']),
  /** Маска ввода. */
  mask: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
