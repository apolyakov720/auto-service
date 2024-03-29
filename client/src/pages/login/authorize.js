import APIService from '@services/api';
import appActions from '@store/actions/application';
import loaderActions from '@store/actions/loader';
import dataActions from '@store/actions/data';
import routerActions from '@store/actions/router';
import { keys } from '@store/data.config';

export default (values) => {
  loaderActions.showLoader();

  APIService.post({ path: '/auth', data: values })
    .then(({ result, token }) => {
      if (result && token) {
        // Сохранить токен

        appActions.authorize();

        return dataActions.fetch([keys.user]);
      } else {
        // показывать пользователю, что авторизация неуспешна
        return Promise.reject();
      }
    })
    .finally(() => {
      routerActions.calculateRoutes();
      loaderActions.hideLoader();
    });
};
