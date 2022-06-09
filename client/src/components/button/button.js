import React from 'react';

import { CSSUtils } from '@utils';

class Button extends React.Component {
  render() {
    const {
      caption,
      theme,
      size,
      extra,
      circled,
      noStroke,
      onClick
    } = this.props;

    const buttonClass = CSSUtils.mergeModifiers('button', {
      circled,
      [theme]: theme,
      'no-stroke': noStroke,
    });
    const sizeClass = size ? `size-${size}` : '';
    const resultButtonClass = CSSUtils.mergeClasses(buttonClass, sizeClass);

    return (
      <button className={resultButtonClass} onClick={onClick}>
        {caption && <span className="button__caption">{caption}</span>}
        {extra && <span className="button__extra">{extra}</span>}
      </button>
    );
  }
}

export default Button;
