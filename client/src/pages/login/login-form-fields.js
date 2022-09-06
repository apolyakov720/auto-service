import React from 'react';
import { Field } from 'react-final-form';

import FormField from '@components/shared/form-field';
import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import { CSSConstants } from '@constants';
import Validator, { types } from '@services/validator';

const fieldNames = {
  login: 'login',
  password: 'password',
};

const validateConfig = {
  [fieldNames.login]: [
    {
      handler: types.required,
    },
  ],
  [fieldNames.password]: [
    {
      handler: types.required,
    },
  ],
};

const validate = (values) => Validator.validate(validateConfig, values);

class LoginFormFields extends React.PureComponent {
  render() {
    return (
      <div className="login-form-fields">
        <Field name={fieldNames.login}>
          {({ input, meta: { touched, error } }) => {
            let theme;
            const errors = touched && error ? error : null;

            if (errors) {
              theme = CSSConstants.THEMES.ERROR;
            }

            return (
              <FormField label="Логин" error={errors}>
                <Input theme={theme} {...input}>
                  <Input.Extra>
                    <Icon source={Icon.sources.base.person} />
                  </Input.Extra>
                </Input>
              </FormField>
            );
          }}
        </Field>
        <Field name={fieldNames.password}>
          {({ input, meta: { touched, error } }) => {
            let theme;
            const errors = touched && error ? error : null;

            if (errors) {
              theme = CSSConstants.THEMES.ERROR;
            }

            return (
              <FormField label="Пароль" error={errors}>
                <Input type="password" theme={theme} {...input}>
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

export { validate };
export default LoginFormFields;
