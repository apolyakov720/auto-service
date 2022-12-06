import popupTypes from '../types/popup';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case popupTypes.SHOW_POPUP:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case popupTypes.CLOSE_POPUP:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
};
