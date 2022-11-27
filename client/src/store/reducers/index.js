import { combineReducers } from 'redux';

import application from './application';
import data from './data';
import router from './router';
import modal from './modal';
import loader from './loader';

const rootReducer = combineReducers({
  application,
  data,
  router,
  modal,
  loader,
});

export default rootReducer;
