import React from 'react';
import { Form } from 'react-final-form';

import LoginHeader from './login-header';
import LoginFormFields, { validate } from './login-form-fields';
import LoginFormControls from './login-form-controls';
import LoginFooter from './login-footer';
import authorize from './authorize';
import { CSSConstants } from '@constants';

class LoginPage extends React.Component {
  /**
   * 1. Отправляем запрос по v1/auth +
   * 2. Получаем токен +
   * 3. Сохраняем токен +
   * 4. Получаем пользователя по токену
   * 5. Делам неавторизованную зону недоступной для перехода
   * 6. Переходим на главную страницу
   * */
  render() {
    return (
      <div className="login-page">
        <LoginHeader />
        <Form onSubmit={authorize} validate={validate}>
          {({ handleSubmit, valid }) => {
            const themeSubmitControl = valid
              ? CSSConstants.THEMES.PRIMARY
              : CSSConstants.THEMES.DISABLED;

            return (
              <form onSubmit={handleSubmit}>
                <LoginFormFields />
                <LoginFormControls themeSubmitControl={themeSubmitControl} />
              </form>
            );
          }}
        </Form>
        <LoginFooter />
      </div>
    );
  }
}

export default LoginPage;
