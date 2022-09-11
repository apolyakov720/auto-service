import React from 'react';

import FinalFormField from '@components/complex/final-form-field';
import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import Select from '@components/shared/select';
import { Checkbox } from '@components/shared/switches';
import Validator, { types } from '@services/validator';

const fieldNames = {
  login: 'login',
  password: 'password',
  confirmPassword: 'confirmPassword',
  firstName: 'firstName',
  secondName: 'secondName',
  lastName: 'lastName',
  job: 'job',
  confirmPersonData: 'confirmPersonData',
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
        <FinalFormField name={fieldNames.firstName} label="Имя" required>
          <Input placeholder="Укажите Ваше имя" />
        </FinalFormField>
        <FinalFormField name={fieldNames.secondName} label="Фамилия" required>
          <Input placeholder="Укажите Вашу фамилию" />
        </FinalFormField>
        <FinalFormField name={fieldNames.lastName} label="Отчество" required>
          <Input placeholder="Укажите Ваше отчество" />
        </FinalFormField>
        <FinalFormField name={fieldNames.job} label="Должность" required multiple>
          <Select />
        </FinalFormField>
        <FinalFormField name={fieldNames.login} label="Логин" required>
          <Input placeholder="Придумайте логин" />
        </FinalFormField>
        <FinalFormField name={fieldNames.password} label="Пароль" hints={hints} required>
          <Input type="password" placeholder="Придумайте пароль">
            <Input.Effect>
              <Icon source={Icon.sources.base.eye} />
            </Input.Effect>
          </Input>
        </FinalFormField>
        <FinalFormField name={fieldNames.confirmPassword} label="Подтверждение пароля" required>
          <Input type="password" placeholder="Подтвердите пароль">
            <Input.Effect>
              <Icon source={Icon.sources.base.eye} />
            </Input.Effect>
          </Input>
        </FinalFormField>
        <FinalFormField name={fieldNames.confirmPersonData} type="checkbox">
          <Checkbox caption="При регистрации нового пользователя, вы соглашаетесь на обработку персональных данных" />
        </FinalFormField>
      </div>
    );
  }
}

export { validate };
export default RegistrationFormFields;
