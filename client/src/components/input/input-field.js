import React, { useState } from 'react';
import { Rifm } from 'rifm';
import Input from './input';

const InputField = ({ mask, state, label, ...inputProps }) => {
  const [value, setValue] = useState('');

  return (
    <Rifm
      value={value}
      onChange={setValue}
      format={val => val}
      mask={mask}>
      {({ value, onChange }) => (
        <Input state={state} label={label} value={value} onChange={onChange} {...inputProps} />
      )}
    </Rifm>
  );
};

export default InputField;
