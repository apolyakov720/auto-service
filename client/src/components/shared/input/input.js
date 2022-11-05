import React from 'react';
import InputMask from 'react-input-mask';

import FormControl from '@components/shared/form-control';
// TODO: рассмотреть возможность вынести отсюда NormalizerService
import NormalizerService from '@services/normalizer';
import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';
import { CSSConstants } from '@constants';

class Input extends React.PureComponent {
  state = {
    theme: null,
  };

  static Extra = FormControl.Extra;

  static Effect = FormControl.Effect;

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
    const { theme: externalTheme, mask, dropdown, children, type, ...inputProps } = this.props;
    const { theme: internalTheme } = this.state;

    let theme = internalTheme;

    if (externalTheme) {
      theme = externalTheme;
    }

    const inputClass = CSSUtils.mergeModifiers('input', {
      [theme]: theme,
    });

    return (
      <FormControl theme={theme} dropdown={dropdown}>
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

Input.defaultProps = {
  type: 'text',
};

export default Input;
