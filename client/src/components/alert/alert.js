import React from 'react';

import Icon from '@components/icon';
import { CSSUtils } from '@utils';

const Alert = ({ content, theme, closable = true }) => {
  const alertClass = CSSUtils.mergeModifiers('alert', {
    [theme]: theme,
  });

  return (
    <div className={alertClass}>
      <div className="alert__content">{content}</div>
      {closable && (
        <div className="alert__effect">
          <Icon source={Icon.sources.base.cross} bold />
        </div>
      )}
    </div>
  );
};
export default Alert;
