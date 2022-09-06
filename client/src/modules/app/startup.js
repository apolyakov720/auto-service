import appActions from '@store/actions/app';
import dataActions from '@store/actions/data';
import { keys } from '@store/data.config';

export default function () {
  appActions.showLoader();

  return new Promise((resolve) => {
    return dataActions
      .fetch([keys.configs, keys.user])
      .then(() => resolve())
      .finally(() => {
        appActions.hideLoader();
      });
  });
}
