import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/router';
import ContainerLoader from './components/containers/loader';
import ErrorIndicator from './components/error-indicator';
// import ContainerModal from './containers/modal';
import startup from './interaction/startup';
import localeService from './services/locale';

class Application extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    startup().then(() => {
      this.setState({ isReady: true });
    });
  }

  render() {
    const { isReady } = this.state;

    return (
      <BrowserRouter>
        <ErrorIndicator alertContent={localeService.take('errors/application')}>
          <div className="application">
            {isReady && <Router />}
            <ContainerLoader />
          </div>
        </ErrorIndicator>
      </BrowserRouter>
    );
  }
}

export default Application;
