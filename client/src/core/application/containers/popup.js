import React from 'react';

import Overlay from '@components/shared/overlay';
import Popup from '@components/layout/popup';
import { coreContext } from '../../core-context';

class ContainerPopup extends React.PureComponent {
  static contextType = coreContext;

  getPopupProps(popup) {
    const { type, title, content } = popup;
    const { locale } = this.context;

    switch (type) {
      case 'confirm':
        return {
          title: locale(title || 'popup/confirm/title'),
        };

      case 'prompt':
        return {
          title: locale(title || 'popup/prompt/title'),
        };

      case 'alert':
      default:
        return {
          type,
          title: locale(title || 'popup/alert/title'),
          content: locale(content || 'popup/alert/content'),
          // controls: [],
        };
    }
  }

  render() {
    const { popups } = this.props;

    if (popups.length) {
      return (
        <Overlay>
          {popups.map((popup, index) => {
            const popupId = popup.id || index;
            const popupProps = this.getPopupProps({ ...popup, id: popupId });

            return <Popup key={popupId} {...popupProps} />;
          })}
        </Overlay>
      );
    }

    return null;
  }
}

export default ContainerPopup;
