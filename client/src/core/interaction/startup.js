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
export default function () {
  loaderActions.showLoader();

  return new Promise((resolve) => {
    return dataActions
      .fetch([dataKeys.configs])
      .then(() => {
        routerActions.calculateRoutes();
      })
      .then(() => resolve())
      .finally(() => {
        loaderActions.hideLoader();
      });
  });
}
