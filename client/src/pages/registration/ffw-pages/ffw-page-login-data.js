import React from 'react';

import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import FinalFormField from '@components/complex/final-form-field';
import FinalFormWizard from '@components/complex/final-form-wizard';
import Validator, { types } from '@services/validator';
import { userFieldNames } from '@store/form.config';

const getValidateConfig = (values) => {
  return {
    [userFieldNames.login]: [
      {
        handler: types.required,
      },
    ],
    [userFieldNames.password]: [
      {
        handler: types.required,
      },
    ],
    [userFieldNames.confirmPassword]: [
      {
        handler: types.required,
      },
      {
        handler: types.equals,
        message: 'Пароли не совпадают',
        params: {
          other: values[userFieldNames.password],
        },
      },
    ],
  };
};

const validate = (values) => Validator.validate(getValidateConfig(values), values);

class FFWPageLoginData extends React.PureComponent {
  render() {
    const { validate } = this.props;

    return (
      <FinalFormWizard.Page validate={validate}>
        <div className="form__fields">
          <FinalFormField name={userFieldNames.login} label="Логин" required>
            <Input placeholder="Придумайте логин" />
          </FinalFormField>
          <FinalFormField name={userFieldNames.password} label="Пароль" required>
            <Input type="password" placeholder="Придумайте пароль">
              <Input.Effect>
                <Icon source={Icon.sources.base.eye} />
              </Input.Effect>
            </Input>
          </FinalFormField>
          <FinalFormField
            name={userFieldNames.confirmPassword}
            label="Подтверждение пароля"
            required>
            <Input type="password" placeholder="Подтвердите пароль">
              <Input.Effect>
                <Icon source={Icon.sources.base.eye} />
              </Input.Effect>
            </Input>
          </FinalFormField>
        </div>
      </FinalFormWizard.Page>
    );
  }
}

FFWPageLoginData.defaultProps = {
  validate,
};

export default FFWPageLoginData;
