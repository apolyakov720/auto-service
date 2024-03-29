import React from 'react';

import Divider from '@components/shared/divider';
import { mergeModifiers } from '@utils/css';

class Popup extends React.Component {
  splitControls(controls) {
    const result = [];

    while (controls.length) {
      result.push(controls.splice(0, 2));
    }

    return result;
  }

  render() {
    const { type, title, content, controls } = this.props;

    const popupClass = mergeModifiers('popup', { type });

    return (
      <div className={popupClass}>
        {title && <div className="popup__title">{title}</div>}
        <div className="popup__content">{content}</div>
        {controls?.length > 0 && (
          <div className="popup__controls">
            {this.splitControls(controls).map((chunk, index) => {
              if (chunk.length > 1) {
                chunk.splice(1, 0, <Divider key={index} />);
              }

              return (
                <div key={index} className="popup__line-controls">
                  {chunk}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Popup;
