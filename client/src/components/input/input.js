import React from 'react';
import CSSUtils from '@utils/css';

const Input = ({ label, state, value, onChange, active, type = 'text', ...inputProps }) => {
  return (
    <div className={CSSUtils.mergeModifiers('input', { active: active })}>
      {label && <div className="input__label">{label}</div>}
      <input
        className="input__field"
        type={type}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      {state && <div className="input__state">{state}</div>}
    </div>
  );
};

export default Input;
