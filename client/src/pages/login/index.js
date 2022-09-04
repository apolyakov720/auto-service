import React from 'react';

import LoginHeader from './login-header';
import LoginFormFields from './login-form-fields';
import LoginFormControls from './login-form-controls';
import LoginFooter from './login-footer';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <LoginHeader />
        <LoginFormFields />
        <LoginFormControls />
        <LoginFooter />
      </div>
    );
  }
}

export default LoginPage;
