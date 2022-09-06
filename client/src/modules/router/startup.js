import config from './config';
import routerActions from '@store/actions/router';

export default () => {
  routerActions.setRoutes(config);
};
