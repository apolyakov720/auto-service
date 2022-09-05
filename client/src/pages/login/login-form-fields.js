import React from 'react';
import { Field } from 'react-final-form';

import FormField from '@components/shared/form-field';
import Input from '@components/shared/input';
import Icon from '@components/shared/icon';

class LoginFormFields extends React.PureComponent {
  render() {
    return (
      <div className="login-form-fields">
        <Field name="login">
          {({ input, meta }) => {
            const error = meta.touched && meta.error ? meta.error : null;
            return (
              <FormField label="Логин" error={error}>
                <Input {...input}>
                  <Input.Extra>
                    <Icon source={Icon.sources.base.person} />
                  </Input.Extra>
                </Input>
              </FormField>
            );
          }}
        </Field>
        <Field name="password">
          {({ meta }) => {
            return (
              <FormField label="Пароль" error={meta.error}>
                <Input type="password">
                  <Input.Extra>
                    <Icon source={Icon.sources.base.key} />
                  </Input.Extra>
                  <Input.Effect>
                    <Icon source={Icon.sources.base.eye} />
                  </Input.Effect>
                </Input>
              </FormField>
            );
          }}
        </Field>
      </div>
    );
  }
}

export default LoginFormFields;
