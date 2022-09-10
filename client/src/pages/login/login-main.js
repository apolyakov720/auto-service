import React from 'react';
import { Form } from 'react-final-form';

import authorize from './authorize';
import LoginFormFields, { validate } from './login-form-fields';
import LoginFormControls from './login-form-controls';

class LoginMain extends React.Component {
  render() {
    return (
      <div className="page__main">
        <Form onSubmit={authorize} validate={validate}>
          {({ handleSubmit, valid }) => {
            return (
              <form className="form" onSubmit={handleSubmit}>
                <LoginFormFields />
                <LoginFormControls valid={valid} />
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default LoginMain;
