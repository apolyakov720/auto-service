import React from 'react';

import { Badge } from '@components/shared/badges';
import { CSSConstants } from '@constants';

class FormField extends React.Component {
  render() {
    const { children, label, required, error, hints = [] } = this.props;

    const resultHints = hints.map((hint, index) => <li key={index}>{hint}</li>);

    return (
      <div className="form-field">
        {(label || required) && (
          <div className="form-field__header">
            {label && <div className="form-field__label">{label}</div>}
            {required && (
              <div className="form-field__required">
                <Badge
                  content="Обязательный"
                  size={CSSConstants.SIZES.XS}
                  theme={CSSConstants.THEMES.SECONDARY}
                  squared
                />
              </div>
            )}
          </div>
        )}
        <div className="form-field__content">{children}</div>
        {hints.length > 0 && <ul className="form-field__hints">{resultHints}</ul>}
        {error && (
          <ul className="form-field__errors">
            <li>{error}</li>
          </ul>
        )}
      </div>
    );
  }
}

export default FormField;
