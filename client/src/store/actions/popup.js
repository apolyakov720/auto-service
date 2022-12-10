import popupTypes from '../types/popup';
import { dispatch } from '../';
import { getGloballyUniqueIdentifier, isFunction } from '@utils/common';

const showPopup = (data) => {
  dispatch({
    type: popupTypes.SHOW_POPUP,
    payload: data,
  });
};

const closePopup = (id) => {
  dispatch({
    type: popupTypes.CLOSE_POPUP,
    payload: id,
  });
};

/**
 * Показывает всплывающее окно предупреждения.
 * Доступны следующие параметры:
 * - id: уникальный идентификатор всплывающего окна, если не задан, будет сгенерирован автоматически;
 * - title: заголовок всплывающего окна;
 * - content: содержимое окна, может быть задано функцией для произвольной отрисовки;
 * - successControlText: текст кнопки контроля;
 * - successControlHandler: контроль, при нажатии будет закрывать всплывающее окно;
 * */
const showAlert = (params) => {
  // Проверяем все параметры, которые были переданы, чтобы не было лишних.
  const { id, title, content, successControlText, successControlHandler } = params || {};

  const popupId = id || getGloballyUniqueIdentifier();

  showPopup({
    title,
    content,
    successControlText,
    id: popupId,
    type: 'alert',
    successControlHandler: function () {
      if (isFunction(successControlHandler)) {
        successControlHandler();
      }
      closePopup(popupId);
    },
  });
};

const showPrompt = () => {};

const showConfirm = () => {};

export { showAlert, showPrompt, showConfirm };
