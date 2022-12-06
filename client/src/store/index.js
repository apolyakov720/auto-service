import { configureStore } from '@reduxjs/toolkit';

import popupActions from './types/popup';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      /**
       * При показе всплыващего окна, необходимо дождаться ответа пользователя прежде чем закрыть.
       * Из функции действия неоходимо вернуть обещание, которое будет выполнено с некоторым результатом после подтверждения пользователем.
       * Для этого передаем в состояние функции действия для взаимодействия с пользователем.
       * Игнорируем данное состояние при проверки на несериализуемые данные.
       * */
      serializableCheck: {
        ignoredActions: [popupActions.SHOW_POPUP],
        ignoredPaths: ['popup.list'],
      },
    }),
});

const getState = store.getState;
const dispatch = store.dispatch;

export { store, getState, dispatch };
