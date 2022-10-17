import React from 'react';

class Switch extends React.PureComponent {
  render() {
    const { caption, baseClass, children, ...inputProps } = this.props;

    return (
      <label className={`switch ${baseClass}`}>
        <input {...inputProps} className="input-not-visible" />
        <span className={`${baseClass}__input`}>{children}</span>
        {caption && <span className="switch__caption">{caption}</span>}
      </label>
    );
  }
}

export default Switch;
