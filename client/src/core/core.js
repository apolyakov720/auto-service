import React from 'react';

import Application from './application';
import { CoreProvider } from './core-context';
import { coreStartup } from './interaction/core-startup';
import { applicationStartup, applicationStartupFailure } from './interaction/application-startup';
import { isFunction } from '@utils/common';

class Core extends React.Component {
  state = {
    localeId: null,
    locale: (text) => text,
    changeLocale: () => {},
  };

  componentDidMount() {
    Promise.resolve(this._start()).then((values) => {
      this.setState(values);
    });
  }

  async _start() {
    const initial = await coreStartup();

    const { changeLocale } = initial || {};

    return {
      ...initial,
      changeLocale: (localeId) => {
        if (isFunction(changeLocale)) {
          changeLocale(localeId);
        }

        this.setLocale(localeId);
      },
    };
  }

  setLocale = (localeId) => {
    this.setState({ localeId });
  };

  render() {
    const { popups, modals, loader } = this.props;

    return (
      <CoreProvider value={this.state}>
        <Application
          startup={applicationStartup}
          startupFailure={applicationStartupFailure}
          loader={loader}
          popups={popups}
          modals={modals}
        />
      </CoreProvider>
    );
  }
}

export default Core;
