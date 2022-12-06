import popupTypes from '../types/popup';
import { dispatch } from '../';
import { getGloballyUniqueIdentifier } from '@utils/common';

const showPopup = (data) => {
  dispatch({
    type: popupTypes.SHOW_POPUP,
    payload: data,
  });
};

const closePopup = (id) => {
  dispatch({
    type: popupTypes.CLOSE_POPUP,
    payload: id,
  });
};

const showAlert = () => {
  return new Promise((resolve) => {
    showPopup({
      id: getGloballyUniqueIdentifier(),
      type: 'alert',
      controls: {
        onSuccess: () => {
          resolve(true);
        },
        onFailure: () => {
          resolve(false);
        },
      },
      resources: {
        onSuccess: 'success',
        onFailure: 'failure',
      },
    });
  });
};

export { closePopup, showAlert };
