import React from 'react';
import { Form } from 'react-final-form';

import LoginHeader from './login-header';
import LoginFormFields from './login-form-fields';
import LoginFormControls from './login-form-controls';
import LoginFooter from './login-footer';
import Validator, { types } from '@services/validator';
import { CSSConstants } from '@constants';

const config = {
  login: [
    {
      handler: types.required,
      message: 'hello world',
    },
  ],
};

class LoginPage extends React.Component {
  render() {
    // { login: 'Hello'(обязательный), password: '123'(обязательный, длинна больше n) }
    // (values) => { login: [{ handler, message, params }] }
    return (
      <div className="login-page">
        <LoginHeader />
        <Form
          onSubmit={() => {
            console.log('submit');
          }}
          validate={(values) => {
            const res = Validator.validate(config, values);

            console.log('values: ', values);

            return res;
          }}>
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
