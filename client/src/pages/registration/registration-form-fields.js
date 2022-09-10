import React from 'react';
import { Field } from 'react-final-form';

import FormField from '@components/shared/form-field';
import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import Validator, { types } from '@services/validator';
import { CSSConstants } from '@constants';

const fieldNames = {
  login: 'login',
  password: 'password',
  confirmPassword: 'confirmPassword',
};

const getValidateConfig = (values) => {
  return {
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
    [fieldNames.confirmPassword]: [
      {
        handler: types.required,
      },
      {
        handler: types.equals,
        message: 'Пароли не совпадают',
        params: {
          other: values[fieldNames.password],
        },
      },
    ],
  };
};

const validate = (values) => Validator.validate(getValidateConfig(values), values);

class RegistrationFormFields extends React.PureComponent {
  render() {
    const { securityProfile } = this.props;

    const hints = [
      `Пароль должен содержать от ${securityProfile.minPasswordLength} до ${securityProfile.maxPasswordLength} символов`,
    ];

    return (
      <div className="form__fields">
        <Field name={fieldNames.login}>
          {({ input, meta: { touched, error } }) => {
            let theme;
            const errors = touched && error ? error : null;

            if (errors) {
              theme = CSSConstants.THEMES.ERROR;
            }

            return (
              <FormField label="Логин" error={errors} required>
                <Input theme={theme} placeholder="Придумайте логин" {...input} />
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
              <FormField label="Пароль" error={errors} hints={hints} required>
                <Input type="password" theme={theme} placeholder="Придумайте пароль" {...input}>
                  <Input.Effect>
                    <Icon source={Icon.sources.base.eye} />
                  </Input.Effect>
                </Input>
              </FormField>
            );
          }}
        </Field>
        <Field name={fieldNames.confirmPassword}>
          {({ input, meta: { touched, error } }) => {
            let theme;
            const errors = touched && error ? error : null;

            if (errors) {
              theme = CSSConstants.THEMES.ERROR;
            }

            return (
              <FormField label="Подтверждение пароля" error={errors} required>
                <Input type="password" theme={theme} placeholder="Подтвердите пароль" {...input}>
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
export default RegistrationFormFields;
