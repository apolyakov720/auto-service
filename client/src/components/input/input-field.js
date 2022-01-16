import React, { useState } from 'react';
import { Rifm } from 'rifm';
import Input from './input';

const parseDigits = (string) => (string.match(/\d+/g) || []).join('');
const formatDate = (string) => {
  const digits = parseDigits(string);
  console.log('digits: ', digits);
  const chars = digits.split('');
  return chars
    .reduce((r, v, index) => (index === 2 || index === 4 ? `${r}-${v}` : `${r}${v}`), '')
    .substr(0, 10);
};
/* const addMask = string => {
  const digits = parseDigits(string);
  const days = digits.slice(0, 2).padEnd(2, '_');
  const months = digits.slice(2, 4).padEnd(2, '_');
  const years = digits.slice(4, 8).padEnd(4, '_');
  return `${days}-${months}-${years}`;
};

const maskFn = (value, mask, chars) => {
  mask = '+7 (999) 999 99-99';
  chars = /[0-9]/;

  const maskChar = '9';

  const valueChars = value.split(''); // [1]
  const maskChars = mask.split(''); // [+, 7, ' ', ( ...

  let result = '';
  let valueCharPosition = 0;
  let maskCharPosition = 0;

  while(valueChars.length) {
    const isTrueValue = valueChars[0] === maskChars[maskCharPosition];

    if (isTrueValue) {
      result += valueChars.shift();
      maskCharPosition++;
      continue;
    }

    if (chars.test(valueChars[0])) {
      while (maskChars[maskCharPosition] !== maskChar) {
        result += maskChars[maskCharPosition++];
      }

      result += valueChars.shift();
    } else {
      break;
    }
  }

  return result;
}; */

const InputField = ({ mask, state, label, ...inputProps }) => {
  const [value, setValue] = useState('');

  return (
    <Rifm
      value={value}
      onChange={setValue}
      format={formatDate}
      // replace={addMask}
      mask={mask}>
      {({ value, onChange }) => (
        <Input state={state} label={label} value={value} onChange={onChange} {...inputProps} />
      )}
    </Rifm>
  );
};

export default InputField;
