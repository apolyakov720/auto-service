import React from 'react';

import FinalFormWizard from '@components/complex/final-form-wizard';
import FFWPagePersonalData from './ffw-pages/ffw-page-personal-data';
import FFWPageIntroduction from './ffw-pages/ffw-page-introduction';
import FFWPageLoginData from './ffw-pages/ffw-page-login-data';
import FFWPageContacts from './ffw-pages/ffw-page-contacts';
import FFWPageConfirm from './ffw-pages/ffw-page-confirm';

class RegistrationPage extends React.Component {
  render() {
    return (
      <FinalFormWizard>
        <FFWPageContacts />
        <FFWPageIntroduction />
        <FFWPagePersonalData />
        <FFWPageContacts />
        <FFWPageLoginData />
        <FFWPageConfirm />
      </FinalFormWizard>
    );
  }
}

export default RegistrationPage;
