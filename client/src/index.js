import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import { store } from '@store';
import Application from '@core';

import './css-modules/styles.styl';

createRoot(document.getElementById('container')).render(
  <Provider store={store}>
    <Application />
  </Provider>,
);
