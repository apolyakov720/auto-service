import React from 'react';

import Button from '@components/shared/button';
import Overlay from '@components/shared/overlay';
import Popup from '@components/layout/popup';
import { coreContext } from '../../core-context';
import { isFunction, cleanNullObjectValues } from '@utils/common';

class ContainerPopup extends React.PureComponent {
  static contextType = coreContext;

  popupTypes = {
    alert: 'alert',
    confirm: 'confirm',
    prompt: 'prompt',
  };

  defaultPopupProps = {
    [this.popupTypes.alert]: {
      title: 'popup/alert/title',
      content: 'popup/alert/content',
      successControlText: 'popup/alert/control/success',
    },
    [this.popupTypes.confirm]: {
      title: 'popup/confirm/title',
      content: 'popup/confirm/content',
      successControlText: 'popup/confirm/control/success',
      failureControlText: 'popup/confirm/control/failure',
    },
    [this.popupTypes.prompt]: {
      title: 'popup/prompt/title',
      content: 'popup/prompt/content',
      successControlText: 'popup/prompt/control/success',
      failureControlText: 'popup/prompt/control/failure',
    },
  };

  getPopupProps(popup) {
    const { type, ...otherProps } = popup;
    const { locale } = this.context;

    const popupType = this.popupTypes[type] || this.popupTypes.alert;
    const {
      title,
      content,
      successControlText,
      failureControlText,
      successControlHandler,
      failureControlHandler,
    } = { ...this.defaultPopupProps[popupType], ...cleanNullObjectValues(otherProps) };

    const controls = [];

    if (successControlHandler) {
      controls.push(
        <Button
          key={0}
          caption={successControlText}
          onClick={successControlHandler}
          full
          noStroke
        />,
      );
    }

    if (failureControlHandler) {
      controls.push(
        <Button
          key={1}
          caption={failureControlText}
          onClick={failureControlHandler}
          full
          noStroke
        />,
      );
    }

    return {
      controls,
      type: popupType,
      title: locale(title),
      content: isFunction(content) ? content() : locale(content),
    };
  }

  render() {
    const { popups } = this.props;

    if (popups.length) {
      return (
        <Overlay>
          {popups.map((popup, index) => {
            const popupId = popup.id || index;
            const popupProps = this.getPopupProps(popup);

            return <Popup key={popupId} {...popupProps} />;
          })}
        </Overlay>
      );
    }

    return null;
  }
}

export default ContainerPopup;
