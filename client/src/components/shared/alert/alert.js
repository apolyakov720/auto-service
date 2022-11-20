import React from 'react';
import PropTypes from 'prop-types';

import Simple from '@components/experimental/simple';
import Icon from '@components/shared/icon';
import { CSSThemes, CSSSizes } from '@utils/css';
import commonUtils from '@utils/common';

/** Компонент "Alert" (Оповещение) */
class Alert extends Simple {
  constructor(props) {
    super(props);

    this.iconThemeMap = {
      ...this.defaultIconThemeMap,
      ...props.iconThemeMap,
    };
  }

  defaultIconThemeMap = {
    [CSSThemes.primary]: Icon.sources.base.infoCircle,
    [CSSThemes.info]: Icon.sources.base.infoCircle,
    [CSSThemes.secondary]: Icon.sources.base.checkCircle,
    [CSSThemes.warning]: Icon.sources.base.questionCircle,
    [CSSThemes.error]: Icon.sources.base.crossCircle,
  };

  onClose = (event) => {
    const { id, onClose } = this.props;

    event.stopPropagation();

    onClose(id);
  };

  render() {
    const { className, iconThemeMap, props } = this;
    const { content, title, onClose, modifiers, action } = props;

    let icon = iconThemeMap[modifiers?.theme];
    let currentAction;

    if (commonUtils.isFunction(onClose)) {
      currentAction = (
        <Icon source={Icon.sources.base.cross} onClick={this.onClose} size={CSSSizes.l} />
      );
    }

    if (action) {
      currentAction = action;
    }

    return (
      <div className={this.getClassNameWrapper()}>
        {icon && (
          <div className={`${className}__icon`}>
            <Icon source={icon} size={CSSSizes.l} />
          </div>
        )}
        <section className={`${className}__section`}>
          {title && <div className={`${className}__title`}>{title}</div>}
          <div className={`${className}__content`}>{content}</div>
        </section>
        {currentAction && <div className={`${className}__action`}>{currentAction}</div>}
      </div>
    );
  }
}

Alert.propTypes = {
  /**
   * Содержимое компонента.
   * Свойство обязательно для заполнения.
   * Принимает React элемент, либо допустимый в качестве дочернего элемента React тип данных.
   * */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]).isRequired,

  /** Заголовок оповещения. */
  title: PropTypes.string,

  /**
   * Необязательный идентификатор.
   * Передается в качестве единственного аргумента в функцию обработчика onClose.
   * */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Все возможные модификаторы компонента. */
  modifiers: PropTypes.shape({
    /**
     * Модификатор, определяющий цветовую тему компонента: фон, цвет границы, цвет текста.
     * Если установлен модификатор "outlined", то цвет фона не изменяется.
     * */
    theme: PropTypes.oneOf(Object.values(CSSThemes)),

    /** Модификатор, задающий постоянный белый фон. */
    outlined: PropTypes.bool,
  }),

  /** Все возможные дополнительные классы. */
  classes: PropTypes.shape({
    /**
     * Размер компонента.
     * Определяется на основе размера шрифта для корня документа.
     * Примечание: размер "M" устанавливается по умолчанию средствами CSS, передача свойства необязательна.
     * */
    size: PropTypes.oneOf(Object.values(CSSSizes)),
  }),

  /**
   * Функция обработчик закрытия компонента.
   * Если свойство установлено, то отображается значок закрытия.
   * Принимает необязательный идентификатор в качестве единственного аргумента.
   * Если свойство отсутствует или передано свойство "action", то значек закрытия недоступен.
   * */
  onClose: PropTypes.func,

  /**
   * Элемент для обработки альтернативного действия.
   * Имеет больший приоритет по сравнению со свойством "onClose".
   * Принимает React элемент, либо допустимый в качестве дочернего элемента React тип данных.
   * */
  action: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),

  /** Свойство для удаления или установки индивидуальных иконок путем указания имени темы и источника иконки. */
  iconThemeMap: PropTypes.objectOf(PropTypes.string),
};

export default Alert;
