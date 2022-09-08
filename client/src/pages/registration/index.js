import React from 'react';
import { Form } from 'react-final-form';

import PageHeader from './page-header';
import FormField from '@components/shared/form-field';
import Input from '@components/shared/input';
import Button from '@components/shared/button';

class RegistrationPage extends React.Component {
  render() {
    return (
      <div className="registration-page">
        <PageHeader />
        <Form onSubmit={() => {}}>
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <FormField label="Логин">
                  <Input placeholder="Придумайте логин" />
                </FormField>
                <FormField label="Пароль">
                  <Input placeholder="Придумайте пароль" />
                </FormField>
                <FormField label="Подтверждение пароля">
                  <Input placeholder="Подтвердите пароль" />
                </FormField>
                <Button caption="Зарегистироваться" />
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default RegistrationPage;
