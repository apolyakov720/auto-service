import React from 'react';
import { CSSUtils } from '@utils';

const FormControl = ({ extra, effect, effectProps, theme, children }) => {
  const formControlClass = CSSUtils.mergeModifiers('form-control', { [theme]: theme });

  return (
    <div className={formControlClass}>
      {extra && <div className="form-control__extra">{extra}</div>}
      <div className="form-control__component">
        {children}
        {effect && (
          <div {...effectProps} className="form-control__effect">
            {effect}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormControl;
