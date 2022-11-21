import React from 'react';

import Input from '@components/shared/input';
import Select from '@components/shared/select';
import FinalFormField from '@components/complex/final-form-field';
import FinalFormWizard from '@components/complex/final-form-wizard';
import Validator, { types } from '@services/validator';
import { userFieldNames } from '@store/form.config';

const validateConfig = {
  [userFieldNames.email]: [
    {
      handler: types.email,
    },
  ],
};

const validate = (values) => Validator.validate(validateConfig, values);

class FFWPageContacts extends React.PureComponent {
  render() {
    const { validate } = this.props;

    return (
      <FinalFormWizard.Page validate={validate}>
        <FinalFormField name={userFieldNames.email} label="Электронная почта" required>
          <Input placeholder="Укажите адрес электронной почты" />
        </FinalFormField>
        <FinalFormField name={userFieldNames.phoneNumber} label="Номер телефона" required>
          <Input placeholder="Укажите номер Вашего телефона" />
        </FinalFormField>
        <FinalFormField name={userFieldNames.workSpace} label="Рабочий кабинет" multiple>
          <Select
            placeholder="Укажите рабочий кабинет"
            items={[
              { id: '1', title: 'hello' },
              { id: '2', title: 'world' },
              { id: '3', title: 'hello' },
              { id: '4', title: 'world' },
              { id: '5', title: 'hello' },
              { id: '6', title: 'world' },
              { id: '7', title: 'hello' },
              { id: '8', title: 'world' },
            ]}
          />
        </FinalFormField>
      </FinalFormWizard.Page>
    );
  }
}

FFWPageContacts.defaultProps = {
  validate,
};

export default FFWPageContacts;
