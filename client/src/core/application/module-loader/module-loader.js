import React from 'react';

import { coreContext } from '../../core-context';

class ModuleLoader extends React.PureComponent {
  static contextType = coreContext;

  loader = null;

  constructor(props) {
    super(props);

    const { id } = props;
    const { modules } = this.context;

    const loader = modules[id];

    if (loader) {
      React.startTransition(() => {
        this.loader = loader;
      });
    } else {
      throw new Error(`Module loader: the loader with the ID "${id}" could not be found`);
    }
  }

  render() {
    const Component = React.lazy(this.loader);

    // TODO создать компонент инлайн лоадер, либо другой, отличный от лоадера приложения
    return (
      <React.Suspense fallback="loading...">
        <Component />
      </React.Suspense>
    );
  }
}

export default ModuleLoader;
