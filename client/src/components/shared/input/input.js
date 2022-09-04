import React from 'react';
import InputMask from 'react-input-mask';

import FormControl from '@components/shared/form-control';
import { NormalizerService } from '@services';
import { CSSUtils, commonUtils } from '@utils';

class Input extends React.PureComponent {
  static Extra = FormControl.Extra;

  static Effect = FormControl.Effect;

  onChangeValue = (event) => {
    const { onChange } = this.props;

    commonUtils.isFunction(onChange) && onChange(event?.target?.value);
  };

  render() {
    const { theme, mask, dropdown, children, ...inputProps } = this.props;

    const themeKey = theme === 'primary' ? 'active' : theme;
    const inputClass = CSSUtils.mergeModifiers('input', {
      [themeKey]: theme,
    });

    return (
      <FormControl theme={theme} dropdown={dropdown}>
        {children}
        <FormControl.Control>
          <InputMask
            {...inputProps}
            className={inputClass}
            onChange={this.onChangeValue}
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
