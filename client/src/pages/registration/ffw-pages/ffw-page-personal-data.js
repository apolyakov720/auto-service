import React from 'react';

import Input from '@components/shared/input';
import FinalFormField from '@components/complex/final-form-field';
import FinalFormWizard from '@components/complex/final-form-wizard';
import Validator, { types } from '@services/validator';
import { userFieldNames } from '@store/form.config';
import DatePicker from '@components/shared/date-picker';

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
};

const validate = (values) => Validator.validate({}, values);

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
          <DatePicker placeholder="Укажите дату Вашего рождения" />
        </div>
      </FinalFormWizard.Page>
    );
  }
}

FFWPagePersonalData.defaultProps = {
  validate,
};

export default FFWPagePersonalData;
