import React from 'react';
import FormControl from '@components/form-control';
import { CSSUtils } from '@utils';

const Input = ({ extra, effect, effectProps, theme, onChange, type = 'text', ...inputProps }) => {
  const inputClass = CSSUtils.mergeModifiers('input', {
    [theme]: theme,
  });

  return (
    <FormControl extra={extra} effect={effect} theme={theme} effectProps={effectProps}>
      <input className={inputClass} type={type} onChange={onChange} {...inputProps} />
    </FormControl>
  );
};

export default Input;
