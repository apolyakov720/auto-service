import React from 'react';

import AppLoader from './app-loader';
import Router from '../router';
import startup from './startup';
import appActions from '@/store/actions/app';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    appActions.showLoader();

    startup()
      .then(() => {
        this.setState({ ready: true });
      })
      .finally(() => {
        appActions.hideLoader();
      });
  }

  render() {
    const { ready } = this.state;

    return (
      <div className="application">
        {ready && <Router />}
        <AppLoader />
      </div>
    );
  }
}

export default App;
