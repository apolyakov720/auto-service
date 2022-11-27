import React from 'react';

import { moduleLoaderConfig } from '../../configs/module-loader';

class ModuleLoader extends React.PureComponent {
  constructor(props) {
    super(props);

    const { loaderId } = props;

    const loader = moduleLoaderConfig[loaderId];

    if (loader) {
      React.startTransition(() => {
        this.state = {
          loader,
        };
      });
    } else {
      throw new Error(`Module loader: the loader with the ID "${loaderId}" could not be found`);
    }
  }

  render() {
    const { loader } = this.state;

    const Component = React.lazy(loader);

    // TODO создать компонент инлайн лоадер, либо другой, отличный от лоадера приложения
    return (
      <React.Suspense fallback="loading...">
        <Component />
      </React.Suspense>
    );
  }
}

export default ModuleLoader;
