import loaderActions from '@store/actions/loader';
import dataActions from '@store/actions/data';
import routerActions from '@store/actions/router';
import { dataKeys } from '@store/data.config';

/**
 * Инициализация приложения:
 * - Получение первоначальных, необходимых для работы, данных;
 * - Инициализация маршрутов;
 * - Добавление всевозможных глобальных слушателей на window, document и др.;
 * - Инициализация различных, в том числе глобальных переменных или состояния;
 * - И т.д. и т.п.;
 * */
const startup = async () => {
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

export { startup };
