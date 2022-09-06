import { combineReducers } from 'redux';

import app from './app';
import data from './data';
import router from './router';

const rootReducer = combineReducers({
  app,
  data,
  router,
});

export default rootReducer;
