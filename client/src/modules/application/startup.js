import loaderActions from '@store/actions/loader';
import dataActions from '@store/actions/data';
import { keys } from '@store/data.config';

export default function () {
  loaderActions.showLoader();

  return new Promise((resolve) => {
    return dataActions
      .fetch([keys.configs])
      .then(() => resolve())
      .finally(() => {
        loaderActions.hideLoader();
      });
  });
}
