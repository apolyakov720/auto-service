import React from 'react';

class Switch extends React.PureComponent {
  render() {
    const { caption, baseClass, children, ...inputProps } = this.props;

    return (
      <label className={baseClass}>
        <input {...inputProps} className="input-no-visible" />
        <span className={`${baseClass}__input`}>{children}</span>
        {caption && <span className={`${baseClass}__caption`}>{caption}</span>}
      </label>
    );
  }
}

export default Switch;
