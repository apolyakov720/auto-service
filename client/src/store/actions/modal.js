import modalTypes from '../types/modal';
import { dispatch } from '../';

const openModal = (payload) => {
  dispatch({
    type: modalTypes.OPEN,
    payload,
  });
};

const closeModal = () => {
  dispatch({
    type: modalTypes.CLOSE,
  });
};

export default {
  openModal,
  closeModal,
};
