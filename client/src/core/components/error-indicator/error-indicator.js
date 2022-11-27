import React from 'react';

import Alert from '@components/shared/alert';
import ErrorBoundary from '@components/functional/error-boundary';
import { CSSThemes } from '@utils/css';

class ErrorIndicator extends React.Component {
  render() {
    const { children, alertContent } = this.props;

    return (
      <ErrorBoundary
        indicator={
          <div className="error-indicator">
            <Alert
              title="Ошибка"
              content={alertContent}
              modifiers={{
                theme: CSSThemes.error,
              }}
            />
          </div>
        }>
        {children}
      </ErrorBoundary>
    );
  }
}

export default ErrorIndicator;
