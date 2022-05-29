import React from 'react';

class Toggle extends React.Component {
  render() {
    const { caption } = this.props;

    return (
      <label className="toggle">
        <input type="checkbox" className="input-no-visible" />
        <span className="toggle__input" />
        {caption && <span className="toggle__caption">{caption}</span>}
      </label>
    );
  }
}

export default Toggle;
