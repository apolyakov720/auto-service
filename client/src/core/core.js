import React from 'react';

import Application from './application';
import localeService from './services/locale';
import { moduleLoaderConfig } from './configurations/module-loader';
import { CoreProvider } from './interaction/core-context';
import { startup } from './interaction/startup';

/**
 * Ядро приложения.
 * Для запуска необходимо:
 * -
 * */
class Core extends React.Component {
  render() {
    return (
      <CoreProvider
        value={{
          locale: localeService.take,
          modules: moduleLoaderConfig,
        }}>
        <Application />
      </CoreProvider>
    );
  }
}

export default Core;
