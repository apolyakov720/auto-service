import React from 'react';

import baseIconSet from './sets/base';
import { CSSConstants } from '@constants';
import { CSSUtils } from '@utils';

const Icon = ({ source, size, bold }) => {
  if (!source) {
    return null;
  }

  const Svg = source;
  const iconClass = CSSUtils.mergeClasses(CSSUtils.mergeModifiers('icon', { bold }), {
    [CSSConstants.sizeClass[size]]: size,
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
