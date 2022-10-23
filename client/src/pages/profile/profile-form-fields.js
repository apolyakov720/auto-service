import React from 'react';

import FinalFormField from '@components/complex/final-form-field';
import Input from '@components/shared/input';
import Select from '@components/shared/select';
import Icon from '@components/shared/icon';
import { userFieldNames } from '@store/form.config';

class ProfileFormFields extends React.PureComponent {
  render() {
    return (
      <div className="form__fields">
        <FinalFormField name={userFieldNames.firstName} label="Имя">
          <Input placeholder="Укажите Ваше имя" />
        </FinalFormField>
        <FinalFormField name={userFieldNames.secondName} label="Фамилия">
          <Input placeholder="Укажите Вашу фамилию" />
        </FinalFormField>
        <FinalFormField name={userFieldNames.lastName} label="Отчество">
          <Input placeholder="Укажите Ваше отчество" />
        </FinalFormField>
        <FinalFormField name={userFieldNames.job} label="Должность" required multiple>
          <Select />
        </FinalFormField>
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
        <FinalFormField name={userFieldNames.confirmPassword} label="Подтверждение пароля" required>
          <Input type="password" placeholder="Подтвердите пароль">
            <Input.Effect>
              <Icon source={Icon.sources.base.eye} />
            </Input.Effect>
          </Input>
        </FinalFormField>
      </div>
    );
  }
}

export default ProfileFormFields;
