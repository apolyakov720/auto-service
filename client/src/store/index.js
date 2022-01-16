import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '@/reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
const getState = store.getState;
const dispatch = store.dispatch;

export { store, getState, dispatch };
