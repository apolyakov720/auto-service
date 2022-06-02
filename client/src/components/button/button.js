import React from 'react';

import { CSSUtils } from '@utils';

const Button = ({ caption, extra, onClick, theme }) => {
  return (
    <button
      className={CSSUtils.mergeModifiers('button', {
        [theme]: theme,
      })}
      onClick={onClick}>
      {extra && <span className="button__extra">{extra}</span>}
      <span>{caption}</span>
    </button>
  );
};

export default Button;
