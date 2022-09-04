import React from 'react';

import Button from '@components/shared/button';
import { CSSConstants } from '@constants';

class LoginFormControls extends React.PureComponent {
  render() {
    return (
      <div className="login-form-controls">
        <div className="a login-form-controls__forgot-password">Забыли пароль?</div>
        <Button caption="Войти" theme={CSSConstants.THEMES.PRIMARY} full />
      </div>
    );
  }
}

export default LoginFormControls;
