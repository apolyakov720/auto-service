import APIService from '@services/api';
import appActions from '@store/actions/app';
import dataActions from '@store/actions/data';
import routerActions from '@store/actions/router';
import { keys } from '@store/data.config';

export default (values) => {
  appActions.showLoader();

  APIService.post('v1/auth', values)
    .then(({ result, token }) => {
      if (result && token) {
        APIService.setToken(token);

        appActions.authorize();

        return dataActions.fetch([keys.user]);
      } else {
        // показывать пользователю, что авторизация неуспешна
        return Promise.reject();
      }
    })
    .finally(() => {
      routerActions.calculateRoutes();
      appActions.hideLoader();
    });
};
