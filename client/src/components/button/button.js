import React from 'react';

import { CSSUtils } from '@utils';
import { CSSConstants } from '@constants';

class Button extends React.Component {
  render() {
    const { caption, theme, size, extra, circled, noStroke, onClick } = this.props;

    const buttonClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('button', {
        circled,
        [theme]: theme,
        'no-stroke': noStroke,
      }),
      {
        [CSSConstants.sizeClass[size]]: size,
      },
    );

    return (
      <button className={buttonClass} onClick={onClick}>
        {caption && <span className="button__caption">{caption}</span>}
        {extra && <span className="button__extra">{extra}</span>}
      </button>
    );
  }
}

export default Button;
