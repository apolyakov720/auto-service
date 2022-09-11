import React from 'react';

import FinalFormField from '@components/complex/final-form-field';
import FormField from '@components/shared/form-field';
import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
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
      <div className="form__fields">
        <FinalFormField name={fieldNames.login} label="Логин">
          <Input>
            <Input.Extra>
              <Icon source={Icon.sources.base.person} />
            </Input.Extra>
          </Input>
        </FinalFormField>
        <FinalFormField name={fieldNames.password} label="Пароль">
          <Input type="password">
            <Input.Extra>
              <Icon source={Icon.sources.base.key} />
            </Input.Extra>
            <Input.Effect>
              <Icon source={Icon.sources.base.eye} />
            </Input.Effect>
          </Input>
        </FinalFormField>
        <FormField>
          <div className="a subheader text-right">Забыли пароль?</div>
        </FormField>
      </div>
    );
  }
}

export { validate };
export default LoginFormFields;
