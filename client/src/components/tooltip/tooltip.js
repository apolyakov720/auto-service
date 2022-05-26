import React from 'react';

class Tooltip extends React.Component {
  render() {
    const { content } = this.props;

    return <div className="tooltip">{content}</div>;
  }
}

export default Tooltip;
