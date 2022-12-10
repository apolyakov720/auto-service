import { configureStore } from '@reduxjs/toolkit';

import popupActions from './types/popup';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    serialize: {
      options: {
        // Показывает функции.
        function: () => '[function]',
        // Показывает неопределенные значения.
        undefined: true,
      },
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорирует действия для несериализуемых значений.
        ignoredActions: [popupActions.SHOW_POPUP],
        ignoredPaths: ['popup.list'],
      },
    }),
});

const getState = store.getState;
const dispatch = store.dispatch;

export { store, getState, dispatch };
