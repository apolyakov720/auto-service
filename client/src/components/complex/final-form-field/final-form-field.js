import React from 'react';
import { Field } from 'react-final-form';

import FormField from '@components/shared/form-field';
import { CSSConstants } from '@constants';

class FinalFormField extends React.PureComponent {
  render() {
    const { name, type, multiple, label, required, hints, children } = this.props;

    return (
      <Field name={name} type={type} multiple={multiple}>
        {({ input, meta: { touched, error } }) => {
          let theme;
          const errors = touched && error ? error : null;

          if (errors) {
            theme = CSSConstants.THEMES.ERROR;
          }

          return (
            <FormField label={label} required={required} hints={hints} error={errors}>
              {React.cloneElement(children, { theme, ...input })}
            </FormField>
          );
        }}
      </Field>
    );
  }
}

export default FinalFormField;
