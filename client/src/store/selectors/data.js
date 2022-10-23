import { createSelector } from '@reduxjs/toolkit';

const selectors = {};

const selectData = (state) => state.data;

const selectDataByKey = (key) => {
  if (selectors[key]) {
    return selectors[key];
  }

  const selector = createSelector(selectData, (select) => select[key].data);

  selectors[key] = selector;

  return selector;
};

export { selectDataByKey };
