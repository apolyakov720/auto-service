import { combineReducers } from 'redux';

import app from './app';
import user from './user';
import router from './router';

const rootReducer = combineReducers({
  app,
  user,
  router,
});

export default rootReducer;
