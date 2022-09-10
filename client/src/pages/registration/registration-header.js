import React from 'react';

import Alert from '@components/shared/alert';
import { CSSConstants } from '@constants';

class RegistrationHeader extends React.PureComponent {
  render() {
    return (
      <div className="page-header">
        <Alert
          theme={CSSConstants.THEMES.INFO}
          content="Пожалуйста, заполните необходимые данные, чтобы зарегистрировать нового пользователя."
        />
      </div>
    );
  }
}

export default RegistrationHeader;
