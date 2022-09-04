import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/shared/icon';
import { CSSUtils, commonUtils } from '@utils';
import { CSSConstants } from '@constants';

/** Компонент "Alert" (Оповещение) */
class Alert extends React.PureComponent {
  onClose = (event) => {
    const { id, onClose } = this.props;

    onClose(event, id);
  };

  render() {
    const { content, theme, textual, size, onClose } = this.props;

    const alertClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('alert', {
        textual,
        [theme]: theme,
      }),
      {
        [CSSConstants.SIZE_CLASSES[size]]: size,
      },
    );

    return (
      <div className={alertClass}>
        <div className="alert__content">{content}</div>
        {commonUtils.isFunction(onClose) && (
          <div className="alert__effect" onClick={this.onClose}>
            <Icon source={Icon.sources.base.cross} bold />
          </div>
        )}
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
  /**
   * Необязательный идентификатор.
   * Передается в качестве второго аргумента в функцию обработчика onClose.
   * */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * Примечание: основная тема устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error', 'disabled']),
  /**
   * Размер компонента.
   * Определяется на основе размера шрифта для корня документа.
   * Примечание: размер "M" устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Флаг для придания более строгого внешнего вида. */
  textual: PropTypes.bool,
  /**
   * Функция обработчик закрытия компонента.
   * Принимает событие клика и необязательный идентификатор в качестве аргументов.
   * Если свойство отсутствует, то закрытие недоступно.
   * */
  onClose: PropTypes.func,
};

export default Alert;
