import React from 'react';

import { mergeModifiers } from '@utils/css';

class Overlay extends React.PureComponent {
  render() {
    const { children, transparent } = this.props;

    const overlayClass = mergeModifiers('overlay', {
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
