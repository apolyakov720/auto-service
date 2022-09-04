import React from 'react';

class LoginHeader extends React.PureComponent {
  render() {
    return (
      <div className="login-header">
        <div className="login-header__greeting">С возвращением!</div>
        <div className="login-header__instructions">Пожалуйста, введите свои данные.</div>
      </div>
    );
  }
}

export default LoginHeader;
