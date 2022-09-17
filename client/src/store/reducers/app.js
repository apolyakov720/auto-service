import appTypes from '../types/app';

const initialState = {
  isAuthorized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appTypes.AUTHORIZE:
      return { ...state, isAuthorized: true };

    default:
      return state;
  }
};
