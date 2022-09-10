import React from 'react';

import LoginHeader from './login-header';
import LoginMain from './login-main';
import LoginFooter from './login-footer';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="page">
        <LoginHeader />
        <LoginMain />
        <LoginFooter />
      </div>
    );
  }
}

export default LoginPage;
