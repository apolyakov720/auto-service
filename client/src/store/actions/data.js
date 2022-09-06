import { getState, dispatch } from '../';
import dataConfig, { statuses } from '../data.config';
import dataTypes from '../types/data';
import APIService from '@services/api';

const _requests = {};

const _getFetchKeys = (keys) => {
  const ready = [];

  if (!keys.length) {
    return ready;
  }

  const dataState = getState().data;

  keys.forEach((key) => {
    const status = dataState[key].status;

    if (status !== statuses.FETCHING) {
      ready.push(key);
    }
  });

  return ready;
};

const _popFetchRequests = (keys) => {
  if (keys.length) {
    keys.forEach((key) => {
      delete _requests[key];
    });
  }
};

const _pushFetchRequests = (keys) => {
  if (keys.length) {
    keys.forEach((key) => {
      _requests[key] = APIService.get(dataConfig[key].url)
        .then((response) => {
          fetchSuccess([{ key, response }]);
          _popFetchRequests([key]);
        })
        .catch(() => {
          fetchFailure([key]);
        });
    });
  }
};

const _getFetchRequests = (keys = []) => {
  const requests = [];

  keys.forEach((key) => {
    const request = _requests[key];

    if (request) {
      requests.push(request);
    }
  });

  return requests;
};

const fetchRequest = (payload) => {
  dispatch({
    type: dataTypes.FETCH_REQUEST,
    payload,
  });
};

const fetchSuccess = (payload) => {
  dispatch({
    type: dataTypes.FETCH_SUCCESS,
    payload,
  });
};

const fetchFailure = (payload) => {
  dispatch({
    type: dataTypes.FETCH_FAILURE,
    payload,
  });
};

const fetch = (keys) => {
  const ready = _getFetchKeys(keys);

  if (!ready.length) {
    return Promise.resolve();
  }

  fetchRequest(ready);
  _pushFetchRequests(ready);

  return new Promise((resolve) => {
    Promise.all(_getFetchRequests(ready)).then(resolve);
  });
};

export default {
  fetch,
};
