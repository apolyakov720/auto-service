import React from 'react';
import InputMask from 'react-input-mask';

import FormControl from '@components/form-control';
import { NormalizerService } from '@services';
import { CSSUtils } from '@utils';

class Input extends React.Component {
  render() {
    const {
      extra,
      effect,
      additionalProps,
      theme,
      onChange,
      mask,
      alwaysShowMask,
      dropdown,
      type = 'text',
      ...inputProps
    } = this.props;

    const themeKey = theme === 'primary' ? 'active' : theme;
    const inputClass = CSSUtils.mergeModifiers('input', {
      [themeKey]: theme,
    });

    return (
      <FormControl
        extra={extra}
        effect={effect}
        theme={theme}
        additionalProps={additionalProps}
        dropdown={dropdown}>
        <InputMask
          className={inputClass}
          type={type}
          onChange={onChange}
          mask={NormalizerService.masks[mask]}
          maskChar={NormalizerService.maskChar[mask] || undefined}
          formatChars={NormalizerService.formatChars}
          alwaysShowMask={alwaysShowMask}
          {...inputProps}
        />
      </FormControl>
    );
  }
}

export default Input;
