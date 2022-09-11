import loaderTypes from '../types/loader';

const initialState = {
  isShow: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loaderTypes.SHOW:
      return { ...state, isShow: true };

    case loaderTypes.HIDE:
      return { ...state, isShow: false };

    default:
      return state;
  }
};
