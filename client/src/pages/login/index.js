import React from 'react';
import { Form } from 'react-final-form';

import LoginHeader from './login-header';
import LoginFormFields, { validate } from './login-form-fields';
import LoginFormControls from './login-form-controls';
import LoginFooter from './login-footer';
import { CSSConstants } from '@constants';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <LoginHeader />
        <Form onSubmit={() => {}} validate={validate}>
          {({ handleSubmit, valid }) => {
            const themeSubmitControl = valid
              ? CSSConstants.THEMES.PRIMARY
              : CSSConstants.THEMES.DISABLED;

            return (
              <form onSubmit={handleSubmit}>
                <LoginFormFields />
                <LoginFormControls themeSubmitControl={themeSubmitControl} />
              </form>
            );
          }}
        </Form>
        <LoginFooter />
      </div>
    );
  }
}

export default LoginPage;
