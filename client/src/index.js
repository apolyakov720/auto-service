import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import Application from './modules/application';

import './css-modules/styles.styl';

const root = createRoot(document.getElementById('container'));

root.render(
  <Provider store={store}>
    <Application />
  </Provider>,
);
