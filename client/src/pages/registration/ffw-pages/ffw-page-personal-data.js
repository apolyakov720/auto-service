import React from 'react';

import Input from '@components/shared/input';
import DatePicker from '@components/shared/date-picker';
import FinalFormField from '@components/complex/final-form-field';
import FinalFormWizard from '@components/complex/final-form-wizard';
import Validator, { types } from '@services/validator';
import { userFieldNames } from '@store/form.config';
import Select from '@components/shared/select';

const validateConfig = {
  [userFieldNames.firstName]: [
    {
      handler: types.required,
    },
  ],
  [userFieldNames.middleName]: [
    {
      handler: types.required,
    },
  ],
  [userFieldNames.lastName]: [
    {
      handler: types.required,
    },
  ],
  [userFieldNames.birthday]: [
    {
      handler: types.required,
    },
    {
      handler: types.dateIsBefore,
      params: {
        format: 'dd.MM.yyyy',
      },
    },
  ],
};

const validate = (values) => Validator.validate(validateConfig, values);

class FFWPagePersonalData extends React.PureComponent {
  render() {
    const { validate } = this.props;

    return (
      <FinalFormWizard.Page validate={validate}>
        <div className="form__fields">
          <FinalFormField name={userFieldNames.firstName} label="Имя" required>
            <Input placeholder="Укажите Ваше имя" />
          </FinalFormField>
          <FinalFormField name={userFieldNames.middleName} label="Фамилия" required>
            <Input placeholder="Укажите Вашу фамилию" />
          </FinalFormField>
          <FinalFormField name={userFieldNames.lastName} label="Отчество" required>
            <Input placeholder="Укажите Ваше отчество" />
          </FinalFormField>
          <FinalFormField name={userFieldNames.birthday} label="Дата рождения" required>
            <DatePicker placeholder="Укажите дату Вашего рождения" />
          </FinalFormField>
          <DatePicker placeholder="Укажите дату Вашего рождения" />
          <Select items={[{ id: '1', title: '201' }]} />
        </div>
      </FinalFormWizard.Page>
    );
  }
}

FFWPagePersonalData.defaultProps = {
  validate,
};

export default FFWPagePersonalData;
