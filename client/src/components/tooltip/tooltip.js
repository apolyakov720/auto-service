import React from 'react';
import { CSSUtils } from '@utils';

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
    const { content, children, position = 'top' } = this.props;
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

export default Tooltip;
