import React from 'react';

import FormControl from '@components/form-control';
import { CSSUtils } from '@utils';

const Input = ({
  extra,
  effect,
  additionalProps,
  theme,
  onChange,
  type = 'text',
  ...inputProps
}) => {
  const themeKey = theme === 'primary' ? 'active' : theme;
  const inputClass = CSSUtils.mergeModifiers('input', {
    [themeKey]: theme,
  });

  return (
    <FormControl extra={extra} effect={effect} theme={theme} additionalProps={additionalProps}>
      <input className={inputClass} type={type} onChange={onChange} {...inputProps} />
    </FormControl>
  );
};

export default Input;
