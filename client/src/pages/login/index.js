import React from 'react';

import Input from '@components/input/input';
import Button from '@components/button';

import Icon from '@components/icon';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="reg-auth-form">
        <div className="reg-auth-form__tabs">
          <div className="tab tab--active">Вход</div>
          <div className="tab">Регистрация</div>
        </div>
        <div className="reg-auth-form__content">
          <div className="form-fields">
            <Input label={<Icon source={Icon.sources.base.check} />} />
            <Input label="Пароль" />
          </div>
          <div style={{ margin: '10px 0' }}>
          </div>
          <div className="form-controls">
            <Button name="Войти" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
