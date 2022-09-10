import React from 'react';
import { Form } from 'react-final-form';

import RegistrationFormFields, { validate } from './registration-form-fields';
import RegistrationFormControls from './registration-form-controls';

class RegistrationMain extends React.PureComponent {
  validateFields = (values) => {
    const { securityProfile } = this.props.configs;

    return validate(values, securityProfile);
  };

  render() {
    const { securityProfile } = this.props.configs;

    return (
      <div className="page__main">
        <Form onSubmit={() => {}} validate={this.validateFields}>
          {({ handleSubmit, valid }) => {
            return (
              <form className="form" onSubmit={handleSubmit}>
                <RegistrationFormFields securityProfile={securityProfile} />
                <RegistrationFormControls valid={valid} />
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default RegistrationMain;
