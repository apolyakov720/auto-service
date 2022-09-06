import routerTypes from '../types/router';

const initialState = {
  routes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case routerTypes.SET_ROUTES:
      return { ...state, routes: action.payload };

    default:
      return state;
  }
};
