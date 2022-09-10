import React from 'react';

class FormField extends React.Component {
  render() {
    const { children, label, required, error, hints = [] } = this.props;

    const resultHints = hints.map((hint, index) => <li key={index}>{hint}</li>);

    return (
      <div className="form-field">
        {(label || required) && (
          <div className="form-field__header">
            {label && <div className="form-field__label">{label}</div>}
            {required && <div className="form-field__required">*</div>}
          </div>
        )}
        <div className="form-field__content">{children}</div>
        {error && (
          <ul className="form-field__errors">
            <li>{error}</li>
          </ul>
        )}
        {hints.length > 0 && <ul className="form-field__hints">{resultHints}</ul>}
      </div>
    );
  }
}

export default FormField;
