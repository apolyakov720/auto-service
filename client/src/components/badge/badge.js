import React from 'react';

import { CSSUtils } from '@utils';

class Badge extends React.Component {
  render() {
    const { theme, content, squared, circled } = this.props;
    const badgeClass = CSSUtils.mergeModifiers('badge', {
      circled,
      squared,
      [theme]: theme,
    });

    return <div className={badgeClass}>{content && <span>{content}</span>}</div>;
  }
}

export default Badge;
