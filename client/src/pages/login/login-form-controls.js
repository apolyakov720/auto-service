import React from 'react';

import Button from '@components/shared/button';

class LoginFormControls extends React.PureComponent {
  render() {
    const { themeSubmitControl } = this.props;

    return (
      <div className="login-form-controls">
        <div className="a login-form-controls__forgot-password">Забыли пароль?</div>
        <Button type="submit" caption="Войти" theme={themeSubmitControl} full />
      </div>
    );
  }
}

export default LoginFormControls;
