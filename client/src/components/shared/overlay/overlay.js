import React from 'react';

class Overlay extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="overlay">
        <div className="overlay__light-box">{children}</div>
      </div>
    );
  }
}

export default Overlay;
