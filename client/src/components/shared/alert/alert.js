import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/shared/icon';
import { CSSUtils } from '@utils';
import { CSSConstants } from '@constants';

/** Компонент "Alert" (Оповещение) */
class Alert extends React.PureComponent {
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
        {typeof onClose === 'function' && (
          <div className="alert__effect" onClick={onClose}>
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
   * Принимает событие клика в качестве единственного аргумента.
   * Если свойство отсутствует, то закрытие недоступно.
   * */
  onClose: PropTypes.func,
};

export default Alert;
