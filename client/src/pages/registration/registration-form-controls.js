import React from 'react';

import Button from '@components/shared/button';
import { CSSConstants } from '@constants';

class RegistrationFormControls extends React.PureComponent {
  render() {
    const { valid } = this.props;

    const theme = valid ? CSSConstants.THEMES.PRIMARY : CSSConstants.THEMES.DISABLED;

    return (
      <div className="form__controls">
        <Button type="submit" caption="Зарегистироваться" theme={theme} full />
      </div>
    );
  }
}

export default RegistrationFormControls;
