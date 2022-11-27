import React from 'react';

import LoginHeader from './login-header';
import LoginMain from './login-main';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="page">
        <LoginHeader />
        <LoginMain />
      </div>
    );
  }
}

export default LoginPage;
