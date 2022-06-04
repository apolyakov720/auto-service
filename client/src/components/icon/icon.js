import React from 'react';

import baseIconSet from './sets/base';
import { CSSUtils } from '@utils';

const Icon = ({ source, size, bold }) => {
  if (!source) {
    return null;
  }

  const Svg = source;
  const iconClass = CSSUtils.mergeModifiers('icon', {
    bold,
    [`size-${size}`]: size,
  });

  return (
    <div className={iconClass}>
      <Svg />
    </div>
  );
};

Icon.sources = {
  base: baseIconSet,
};

export default Icon;
