import React from 'react';

import { CSSUtils } from '@utils';

const FormControl = ({ extra, effect, theme, children, additionalProps = {
  onExtraClick: null,
  onEffectClick: null,
}}) => {
  const formControlClass = CSSUtils.mergeModifiers('form-control', { [theme]: theme });

  const onExtraClick = () => {
    additionalProps.onExtraClick && additionalProps.onExtraClick();
  };
  const onEffectClick = () => {
    additionalProps.onEffectClick && additionalProps.onEffectClick();
  };

  return (
    <div className={formControlClass}>
      {extra && (
        <div onClick={onExtraClick} className="form-control__extra">{extra}</div>
      )}
      <div className="form-control__component">
        {children}
        {effect && (
          <div onClick={onEffectClick} className="form-control__effect">
            {effect}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormControl;
