import appTypes from '../action-types/app';

const initialState = {
  loader: {
    show: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appTypes.SHOW_LOADER:
      return { ...state, loader: { ...state.loader, show: true } };

    case appTypes.HIDE_LOADER:
      return { ...state, loader: { ...state.loader, show: false } };

    default:
      return state;
  }
};
