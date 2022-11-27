import React from 'react';
import { Field } from 'react-final-form';

import FormField from '@components/shared/form-field';
import { CSSThemes } from '@utils/css';

class FinalFormField extends React.PureComponent {
  render() {
    const { name, type, label, required, hints, children } = this.props;

    return (
      <Field name={name} type={type} initialValue={children.props.value}>
        {({ input, meta: { touched, error, dirty } }) => {
          let theme;
          const errors = (touched || dirty) && error ? error : null;

          if (errors) {
            theme = CSSThemes.error;
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
