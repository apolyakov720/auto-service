import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/router';
import ContainerLoader from './components/containers/loader';
import ErrorIndicator from './components/error-indicator';
// import ContainerModal from './containers/modal';
import startup from './interaction/startup';

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
        <ErrorIndicator alertContent="Извините, в данный момент в работе приложения наблюдается сбой. Пожалуйста, повторите попытку позже.">
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
