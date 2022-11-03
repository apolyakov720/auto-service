import React from 'react';

import { Checkbox } from '@components/shared/switches';
import FinalFormField from '@components/complex/final-form-field';
import FinalFormWizard from '@components/complex/final-form-wizard';
import { userFieldNames } from '@store/form.config';

class FFWPageConfirm extends React.PureComponent {
  render() {
    return (
      <FinalFormWizard.Page>
        <FinalFormField name={userFieldNames.confirmPersonData} type="checkbox">
          <Checkbox caption="При регистрации нового пользователя, вы соглашаетесь на обработку персональных данных" />
        </FinalFormField>
      </FinalFormWizard.Page>
    );
  }
}

export default FFWPageConfirm;
