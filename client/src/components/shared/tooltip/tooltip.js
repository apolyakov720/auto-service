import React from 'react';
import PropTypes from 'prop-types';

import { CSSUtils } from '@utils';

/** Компонент "Tooltip" (Всплывающая подсказка) */
class Tooltip extends React.Component {
  state = {
    visible: false,
  };

  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const { content, children, position } = this.props;
    const tooltipClass = CSSUtils.mergeModifiers('tooltip', {
      [position]: true,
    });

    return (
      <div className="trigger" onClick={this.toggleVisible}>
        {children}
        {this.state.visible && (
          <div className={tooltipClass}>
            <div className="tooltip__content">
              <div>{content}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]).isRequired,
  children: PropTypes.elementType.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'auto']),
};

Tooltip.defaultProps = {
  position: 'top',
};

export default Tooltip;
