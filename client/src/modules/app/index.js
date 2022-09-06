import React from 'react';

import AppLoader from './app-loader';
import Router from '../router';
import startup from './startup';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    startup().then(() => {
      this.setState({ ready: true });
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
