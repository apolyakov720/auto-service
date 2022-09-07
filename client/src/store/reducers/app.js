import appTypes from '../types/app';

const initialState = {
  loader: {
    isShow: false,
  },
  isAuthorized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appTypes.SHOW_LOADER:
      return { ...state, loader: { ...state.loader, isShow: true } };

    case appTypes.HIDE_LOADER:
      return { ...state, loader: { ...state.loader, isShow: false } };

    case appTypes.AUTHORIZE:
      return { ...state, isAuthorized: true };

    default:
      return state;
  }
};
