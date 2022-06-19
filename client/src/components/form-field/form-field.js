import React from 'react';

import { Badge } from '@components/badge';
import { CSSConstants } from '@constants';

class FormField extends React.Component {
  render() {
    const { children, label, required, hints = [], errors = [] } = this.props;

    const resultHints = hints.map((hint, index) => <li key={index}>{hint}</li>);
    const resultErrors = errors.map((error, index) => <li key={index}>{error}</li>);

    return (
      <div className="form-field">
        {(label || required) && (
          <div className="form-field__header">
            {label && <div className="form-field__label">{label}</div>}
            {required && (
              <div className="form-field__required">
                <Badge
                  content="Обязательный"
                  size={CSSConstants.size.XS}
                  theme={CSSConstants.theme.SECONDARY}
                  squared
                />
              </div>
            )}
          </div>
        )}
        <div className="form-field__content">{children}</div>
        {hints.length > 0 && <ul className="form-field__hints">{resultHints}</ul>}
        {errors.length > 0 && <ul className="form-field__errors">{resultErrors}</ul>}
      </div>
    );
  }
}

export default FormField;
