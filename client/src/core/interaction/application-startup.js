import loaderActions from '@store/actions/loader';
import dataActions from '@store/actions/data';
import routerActions from '@store/actions/router';
import { showAlert } from '@store/actions/popup';
import { dataKeys } from '@store/data.config';

/**
 * Инициализация приложения:
 * - Получение первоначальных, необходимых для работы, данных;
 * - Инициализация маршрутов;
 * - Добавление всевозможных глобальных слушателей на window, document и др.;
 * - Инициализация различных, в том числе глобальных переменных или состояния;
 * - И т.д. и т.п.;
 * */
const applicationStartup = async () => {
  loaderActions.showLoader();

  await dataActions
    .fetch([dataKeys.configs])
    .then(() => {
      routerActions.calculateRoutes();
    })
    .finally(() => {
      loaderActions.hideLoader();
    });
};

const applicationStartupFailure = () => {
  showAlert().then(() => console.log('hello'));
};

export { applicationStartup, applicationStartupFailure };
