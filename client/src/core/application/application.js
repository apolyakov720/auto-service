import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import ContainerLoader from './containers/loader';
import ContainerModal from './containers/modal';
import ContainerPopup from './containers/popup';
import ErrorIndicator from './error-indicator';
import { isFunction } from '@utils/common';

class Application extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    Promise.resolve(this._start()).then((result) => {
      this.setState({ isReady: result });
    });
  }

  async _start() {
    const { startup, startupSuccess, startupFailure } = this.props;

    if (isFunction(startup)) {
      return await startup()
        .then(async () => {
          if (isFunction(startupSuccess)) {
            await startupSuccess();
          }

          return true;
        })
        .catch(async () => {
          if (isFunction(startupFailure)) {
            await startupFailure();
          }

          return false;
        })
        .catch(() => false);
    }

    return true;
  }

  render() {
    const { isReady } = this.state;
    const { routes } = this.props;

    const validRoutes = Array.isArray(routes) ? routes : [];

    return (
      <BrowserRouter>
        <ErrorIndicator message="errors/application">
          <div className="application">
            {isReady && <Router routes={validRoutes} />}
            <ContainerLoader />
            <ContainerModal />
            <ContainerPopup popup={true} />
          </div>
        </ErrorIndicator>
      </BrowserRouter>
    );
  }
}

export default Application;
