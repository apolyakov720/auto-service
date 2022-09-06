import dataTypes from '../types/data';
import dataConfig, { statuses } from '../data.config';

const getInitialState = () =>
  Object.entries(dataConfig).reduce((accumulate, [key, config]) => {
    accumulate[key] = {
      status: statuses.NOT_FETCHED,
      data: config.initializer(),
    };

    return accumulate;
  }, {});

export default (state = getInitialState(), action) => {
  const chunks = {};

  switch (action.type) {
    case dataTypes.FETCH_REQUEST:
      action.payload.forEach((key) => {
        chunks[key] = {
          ...state[key],
          status: statuses.FETCHING,
        };
      });

      return {
        ...state,
        ...chunks,
      };

    case dataTypes.FETCH_SUCCESS:
      action.payload.forEach(({ key, response }) => {
        chunks[key] = {
          ...state[key],
          data: dataConfig[key].parser(response),
          status: statuses.FETCHED,
        };
      });

      return {
        ...state,
        ...chunks,
      };

    case dataTypes.FETCH_FAILURE:
      action.payload.forEach((key) => {
        chunks[key] = {
          ...state[key],
          data: dataConfig[key].initializer(),
          status: statuses.FETCH_ERROR,
        };
      });

      return {
        ...state,
        ...chunks,
      };

    default:
      return state;
  }
};
