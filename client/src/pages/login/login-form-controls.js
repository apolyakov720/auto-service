import React from 'react';

import Button from '@components/shared/button';
import { CSSThemes } from '@utils/css';

class LoginFormControls extends React.PureComponent {
  render() {
    const { valid } = this.props;

    const theme = valid ? CSSThemes.primary : CSSThemes.disabled;

    return (
      <div className="form__controls">
        <Button type="submit" caption="Войти" theme={theme} full />
      </div>
    );
  }
}

export default LoginFormControls;
