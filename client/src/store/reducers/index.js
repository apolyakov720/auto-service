import { combineReducers } from 'redux';

import application from './application';
import data from './data';
import router from './router';
import modal from './modal';
import loader from './loader';
import popup from './popup';

const rootReducer = combineReducers({
  application,
  data,
  router,
  modal,
  loader,
  popup,
});

export default rootReducer;
