import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import FormControl from '@components/shared/form-control';
// TODO: рассмотреть возможность вынести отсюда NormalizerService
import NormalizerService from '@services/normalizer';
import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';
import { CSSConstants } from '@constants';

/** Компонент "Input" (Поле ввода) */
class Input extends React.PureComponent {
  state = {
    theme: null,
  };

  static Extra = (props) => FormControl.Extra(props);

  static Effect = (props) => FormControl.Effect(props);

  setTheme = () => {
    this.setState({
      theme: CSSConstants.THEMES.PRIMARY,
    });
  };

  unsetTheme = () => {
    this.setState({
      theme: null,
    });
  };

  onChange = (event) => {
    const { onChange } = this.props;

    commonUtils.isFunction(onChange) && onChange(event?.target?.value);
  };

  onBlur = (event) => {
    const { onBlur } = this.props;

    this.unsetTheme();

    commonUtils.isFunction(onBlur) && onBlur(event);
  };

  onFocus = (event) => {
    const { onFocus } = this.props;

    this.setTheme();

    commonUtils.isFunction(onFocus) && onFocus(event);
  };

  render() {
    const { theme: externalTheme, mask, children, type, ...inputProps } = this.props;
    const { theme: internalTheme } = this.state;

    let theme = internalTheme;

    if (externalTheme) {
      theme = externalTheme;
    }

    const inputClass = CSSUtils.mergeModifiers('input', {
      [theme]: theme,
    });

    return (
      <FormControl theme={theme}>
        {children}
        <FormControl.Control>
          <InputMask
            {...inputProps}
            type={type}
            className={inputClass}
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
