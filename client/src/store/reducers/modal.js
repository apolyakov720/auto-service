import modalTypes from '../types/modal';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.OPEN:
      return { ...state, isOpen: true, data: { ...state.data, ...action.payload } };

    case modalTypes.CLOSE:
      return initialState;

    default:
      return state;
  }
};
