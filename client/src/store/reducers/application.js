import applicationTypes from '../types/application';

const initialState = {
  isAuthorized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case applicationTypes.AUTHORIZE:
      return { ...state, isAuthorized: true };

    default:
      return state;
  }
};
