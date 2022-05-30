import React from 'react';

class FormField extends React.Component {
  render() {
    const { children, label, required, hints = [], errors = [] } = this.props;

    const resultHints = hints.map((hint, index) => <li key={index}>{hint}</li>);
    const resultErrors = errors.map((error, index) => <li key={index}>{error}</li>);

    return (
      <div className="form-field">
        {label && (
          <div className="form-field__label">
            {label}
            {required && '*'}
          </div>
        )}
        <div className="form-field__content">{children}</div>
        <ul className="form-field__hints">{resultHints}</ul>
        <ul className="form-field__errors">{resultErrors}</ul>
      </div>
    );
  }
}

export default FormField;
