import React from 'react';

import Alert from '@components/shared/alert';
import ErrorBoundary from '@components/functional/error-boundary';
import { coreContext } from '../../core-context';
import { CSSThemes } from '@utils/css';

class ErrorIndicator extends React.Component {
  static contextType = coreContext;

  render() {
    const { children, message } = this.props;
    const { locale } = this.context;

    return (
      <ErrorBoundary
        indicator={
          <div className="error-indicator">
            <Alert
              title={locale('error/title')}
              content={locale(message)}
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
