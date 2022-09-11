import { combineReducers } from 'redux';

import app from './app';
import data from './data';
import router from './router';
import modal from './modal';
import loader from './loader';

const rootReducer = combineReducers({
  app,
  data,
  router,
  modal,
  loader,
});

export default rootReducer;
