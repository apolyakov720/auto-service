import React from 'react';
import { CSSUtils } from '@utils';

const Button = ({ name, state, onClick, type = 'primary', size = 'medium' }) => {
  return (
    <button
      className={CSSUtils.mergeModifiers('button', {
        [type]: true,
        [size]: true,
      })}
      onClick={onClick}>
      {state && <span className="button__state">{state}</span>}
      <span>{name}</span>
    </button>
  );
};

export default Button;
