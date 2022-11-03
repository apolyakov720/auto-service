import React from 'react';

import FinalFormWizard from '@components/complex/final-form-wizard';

class FFWPageIntroduction extends React.PureComponent {
  render() {
    return (
      <FinalFormWizard.Page>
        <div>Добро пожаловать в мастер-регистрации.</div>
        <div>
          Пожалуйста, заполните все необходимые данные, чтобы зарегистрировать нового пользователя.
        </div>
      </FinalFormWizard.Page>
    );
  }
}

export default FFWPageIntroduction;
