import React from 'react';
import { CSSUtils } from '@utils';

class Overlay extends React.PureComponent {
  render() {
    const { children, transparent } = this.props;

    const overlayClass = CSSUtils.mergeModifiers('overlay', {
      transparent: transparent,
    });

    return (
      <div className={overlayClass}>
        <div className="overlay__light-box">{children}</div>
      </div>
    );
  }
}

export default Overlay;
