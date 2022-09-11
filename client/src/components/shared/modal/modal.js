import React from 'react';

import Overlay from '../overlay';
import Icon from '../icon';
import Button from '../button';
import commonUtils from '@utils/common';

class Modal extends React.Component {
  render() {
    const { children, title, onClose } = this.props;

    return (
      <Overlay>
        <div className="modal">
          <div className="modal__header">
            {title && <span>{title}</span>}
            {commonUtils.isFunction(onClose) && (
              <Button
                extra={<Icon source={Icon.sources.base.cross} />}
                onClick={onClose}
                noStroke
              />
            )}
          </div>
          <div className="modal__main">{children}</div>
        </div>
      </Overlay>
    );
  }
}

export default Modal;
