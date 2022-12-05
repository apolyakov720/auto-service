import React from 'react';

import Overlay from '@components/shared/overlay';
import Button from '@components/shared/button';

class ContainerPopup extends React.PureComponent {
  render() {
    const { popup } = this.props;

    if (popup) {
      return (
        <Overlay>
          <div className="popup">
            <div className="popup__title">hello1</div>
            <div className="popup__content"></div>
            <div className="popup__controls">
              <Button caption="Понятно" full noStroke />
              <div className="diliver"></div>
              <Button caption="Понятно" full noStroke />
            </div>
          </div>
        </Overlay>
      );
    }

    return null;
  }
}

export default ContainerPopup;
