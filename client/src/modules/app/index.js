import React from 'react';

import LoaderContainer from './loader-container';
import ModalContainer from './modal-container';
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
        <LoaderContainer />
        <ModalContainer />
      </div>
    );
  }
}

export default App;
