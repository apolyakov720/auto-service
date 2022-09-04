import React from 'react';

import FormField from '@components/shared/form-field';
import Input from '@components/shared/input';
import Icon from '@components/shared/icon';

class LoginFormFields extends React.PureComponent {
  render() {
    return (
      <div className="login-form-fields">
        <FormField label="Логин">
          <Input>
            <Input.Extra>
              <Icon source={Icon.sources.base.person} />
            </Input.Extra>
          </Input>
        </FormField>
        <FormField label="Пароль">
          <Input>
            <Input.Extra>
              <Icon source={Icon.sources.base.key} />
            </Input.Extra>
            <Input.Effect>
              <Icon source={Icon.sources.base.eye} />
            </Input.Effect>
          </Input>
        </FormField>
      </div>
    );
  }
}

export default LoginFormFields;
