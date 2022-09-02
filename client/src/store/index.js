import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const store = configureStore({ reducer: rootReducer });

const getState = store.getState;
const dispatch = store.dispatch;

export { store, getState, dispatch };
