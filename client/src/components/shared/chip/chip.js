import React from 'react';
import PropTypes from 'prop-types';

import Simple from '@components/experimental/simple';
import Icon from '@components/shared/icon';
import commonUtils from '@utils/common';
import { CSSThemes, CSSSizes } from '@utils/css';

/** Компонент "Chip" (Фишка) */
class Chip extends Simple {
  onClick = () => {
    const { id, onClick } = this.props;

    if (commonUtils.isFunction(onClick)) {
      onClick(id);
    }
  };

  onClose = (event) => {
    const { id, onClose } = this.props;

    event.stopPropagation();

    onClose(id);
  };

  render() {
    const { label, onClose } = this.props;

    const chipClass = super.getClass();

    return (
      <div className={chipClass} onClick={this.onClick}>
        <div className="chip__label">{label}</div>
        {commonUtils.isFunction(onClose) && (
          <div className="chip__close" onClick={this.onClose}>
            <Icon source={Icon.sources.base.cross} />
          </div>
        )}
      </div>
    );
  }
}

Chip.propTypes = {
  /** Содержимое компонента. */
  label: PropTypes.string.isRequired,

  /**
   * Идентификатор.
   * Передается в качестве единственного аргумента в функции обработчики onClick и onClose.
   * */
  id: PropTypes.string,

  /** Все возможные модификаторы компонента. */
  modifiers: PropTypes.shape({
    /** Модификатор, определяющий цветовую тему компонента: фон, границу, цвет текста. */
    theme: PropTypes.oneOf(Object.values(CSSThemes)),

    /** Модификатор, уменьшающий отступы и скругления компонента. */
    textual: PropTypes.bool,
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
   * Функция обработчик нажатия на компонент.
   * Принимает необязательный идентификатор в качестве единственного аргумента.
   * */
  onClick: PropTypes.func,

  /**
   * Функция обработчик закрытия компонента.
   * Принимает необязательный идентификатор в качестве единственного аргумента.
   * Если свойство отсутствует, то закрытие недоступно.
   * */
  onClose: PropTypes.func,
};

export default Chip;
